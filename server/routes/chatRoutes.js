const router = require("express").Router();
const axios = require("axios");
const Chat = require("../models/Chat");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  try {
    const { message } = req.body;

    // 1. Get previous chats of this user
    const previousChats = await Chat.find({ userId: req.user })
      .sort({ createdAt: 1 })
      .limit(10); // last 10 messages

    // 2. Convert chats to AI format
    let messages = [];

    previousChats.forEach(chat => {
      messages.push({
        role: "user",
        content: chat.message,
      });

      messages.push({
        role: "assistant",
        content: chat.response,
      });
    });

    // 3. Add current user message
    messages.push({
      role: "user",
      content: message,
    });

    // 4. Send to Groq API
    const aiResponse = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = aiResponse.data.choices[0].message.content;

    // 5. Save new chat
    await Chat.create({
      userId: req.user,
      message: message,
      response: reply,
    });

    res.json({
      reply: reply,
    });

  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI failed",
    });
  }
});


//get chat history
router.get("/", auth, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user })
      .sort({ createdAt: 1 });

    res.json(chats);

  } catch {
    res.status(500).json({ message: "Failed to fetch chats" });
  }
});

module.exports = router;

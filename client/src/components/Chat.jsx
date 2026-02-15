import { useState } from "react";
import axios from "axios";





export default function Chat() {
  //  const user = JSON.parse(localStorage.getItem("user"));

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const token = localStorage.getItem("token");

    const userMsg = {
      type: "user",
      text: message
    };

    setMessages(prev => [...prev, userMsg]);
    setMessage("");

    try {

      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const aiMsg = {
        type: "ai",
        text: res.data.reply
      };

      setMessages(prev => [...prev, aiMsg]);

    } catch {

      setMessages(prev => [
        ...prev,
        { type: "ai", text: "AI failed" }
      ]);

    }
  };

  return (

    <div className="flex h-screen">

      {/* Sidebar (always dark) */}
      <div className="w-64 bg-[#0f172a] text-white flex flex-col justify-between">

        <div>
          <button className="m-4 w-[85%] py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
            + New Chat
          </button>
        </div>

        <div className="p-4 space-y-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="block w-full text-left"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="text-red-400"
          >
            Logout
          </button>

          {/* <div>
         {user?.name}
           </div> */}

        </div>

      </div>

      {/* Chat Area */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white"
          : "bg-gray-100 text-black"
      }`}>

        {/* Header */}
        <div className={`p-4 text-center font-bold border-b ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}>
          AI Chatbot
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.length === 0 && (

            <div className="text-center mt-20">

              <h2 className="text-xl font-semibold">
                Start a Conversation
              </h2>

              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Ask me anything!
              </p>

            </div>

          )}

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.type === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`px-4 py-2 rounded-lg max-w-[60%] ${
                  msg.type === "user"
                    ? "bg-purple-500 text-white"
                    : darkMode
                      ? "bg-gray-700"
                      : "bg-white border"
                }`}
              >
                {msg.text}
              </div>

            </div>

          ))}

        </div>

        {/* Input */}
        <div className="p-4 flex gap-3">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
            className={`flex-1 p-3 rounded-full outline-none ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white border"
            }`}
          />

          <button
            onClick={sendMessage}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          >
            ➤
          </button>

        </div>

      </div>

    </div>

  );
}

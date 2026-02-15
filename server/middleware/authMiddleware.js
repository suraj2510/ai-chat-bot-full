const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    // split "Bearer token"
    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified.id;

    next();

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

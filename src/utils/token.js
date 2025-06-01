const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    
    console.log("Verifying token...");
  const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    // console.log("✅ Decoded token:", decoded); // 👈 Add this

    console.log(`Decoded user:`, req.user);
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken };

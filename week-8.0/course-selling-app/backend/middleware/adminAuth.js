const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  // Input Token from headers
  const token = req.headers.authorization;

  // Input Token from headers
  if(!token){
    res.status(401).json({
      message: "No token, Access Denied!!"
    })
  }

  // Verifying token is correct or not and passing control to next
  try{
    const decodedInfo = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    req.adminId = decodedInfo.adminId;
    next();
  }
  catch{
    res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = {
  adminMiddleware
}
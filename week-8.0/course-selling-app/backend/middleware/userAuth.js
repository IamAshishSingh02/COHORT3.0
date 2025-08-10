const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    res.status(401).json({
      message: "No token, Access Denied!!"
    })
  }

  try{
    const decodedInfo = jwt.verify(token, process.env.JWT_USER_SECRET);
    req.userId = decodedInfo.userId;
    next();
  }
  catch{
    res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = {
  userMiddleware
}
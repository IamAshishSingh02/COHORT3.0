const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
  // Input Token from headers
  const token = req.headers.authorization;

  // Checking if token is given or not
  if(!token){
    res.status(401).json({
      message: "No token, Access Denied!!"
    })
  }

  // Verifying token is correct or not and passing control to next
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
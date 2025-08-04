const jwt = require("jsonwebtoken");
const JWT_SECRET = "my_super_secret_key";

const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);

  if(decodedInfo){
    req.userId = decodedInfo.userId;
    next();
  }
  else{
    res.status(403).json({
      message: "Incorrect Credentials!!"
    })
  }
}

module.exports = {
    auth,
    JWT_SECRET
}
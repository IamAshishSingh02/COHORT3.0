const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const JWT_SECRET = "my_super_secret_key";

const users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are signed Up!!"
  })
})

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username && user.password === password);

  if(user){
    const token = jwt.sign({
      username: username
    },JWT_SECRET);

    res.json({
      token: token
    })
  }
  else{
    res.status(403).json({
      message: "Invalid username or password"
    })
  }
})

const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodeInfo = jwt.verify(token, JWT_SECRET);
  
  if(decodeInfo.username){
    req.username = decodeInfo.username;
    next();
  }
  else{
    res.status(404).send({
      message: "User not found!!"
    })
  }
}

app.get("/me", auth, (req, res) => {
  const user = users.find(user => user.username === req.username);

  if(user){
    res.json({
      username: user.username,
      password: user.password
    })
  }
})

app.listen(3000);
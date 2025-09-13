const express = require("express");
const app = express();
app.use(express.json());

const {UserModel, TodoModel} = require("./db");

const jwt = require("jsonwebtoken");
const {auth, JWT_SECRET} = require("./auth");

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email,
    password,
    name
  })

  res.json({
    message: "You are Signed Up"
  })
})

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
    password
  })

  if(user){
    const token = jwt.sign({
      userId: user._id.toString()
    }, JWT_SECRET);
    res.json({
      token
    })
  }
  else{
    res.status(403).json({
      message: "Incorrect Credentials!!"
    })
  }
})

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    title,
    done,
    userId
  })

  res.json({
    message: "Todo Created"
  })
})

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId
  const todos = await TodoModel.find({
    userId
  })

  res.json({
    todos
  })
})

app.listen(3000);
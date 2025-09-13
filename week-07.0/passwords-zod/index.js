const express = require("express");
const app = express();
app.use(express.json());

const {UserModel, TodoModel} = require("./db");

const jwt = require("jsonwebtoken");
const {auth, JWT_SECRET} = require("./auth");

const bcrypt = require("bcrypt");

const {z} = require("zod");

app.post("/signup", async (req, res) => {
  const validBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(30),
    name: z.string().min(3).max(100)
  })

  const parsedData = validBody.safeParse(req.body);

  if(!parsedData.success){
    res.json({
      message: "Incorect Format",
      error: parsedData.error
    })
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashPassword = await bcrypt.hash(password, 5);
  console.log(hashPassword);
  

  await UserModel.create({
    email,
    password: hashPassword,
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
    email
  })

  if(!user){
    res.status(403).json({
      message: "User does not exist!!"
    })
    return;
  }

  const passMatch = await bcrypt.compare(password, user.password)

  if(passMatch){
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
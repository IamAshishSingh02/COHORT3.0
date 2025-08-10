const express = require("express");
const Router = express.Router;
const userRouter = Router();

const {z} = require("zod");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {userModel} = require("../models/user");
const {purchaseModel} = require("../models/purchase");

// User SignUp
userRouter.post("/signup", async (req, res) => {
  // Zod Validation
  const validBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(100),
    firstName: z.string().min(3).max(30),
    lastName: z.string().max(30)
  })

  // Safe Parsing
  const parsedData = validBody.safeParse(req.body);

  if(!parsedData.success){
    res.json({
      message: "Incorrect Format!!",
      error: parsedData.error
    })
    return;
  }

  // Input from User
  const {email, password, firstName, lastName} = req.body;

  // Hashing using Bcrypt
  const hashPassword = await bcrpyt.hash(password, 6);

  // Inserting data into User Model
  await userModel.create({
    email,
    password: hashPassword,
    firstName,
    lastName
  })

  // Message Display
  res.json({
    message: "You are Signed Up!!"
  })
})

// User SignIn
userRouter.post("/signin", async (req, res) => {
  // Input from user
  const {email, password} = req.body;

  // Finding the user in database
  const user = await userModel.findOne({
    email
  })

  // If user does not exists
  if(!user){
    res.status(400).json({
      message: "User does not exists"
    })
    return;
  }

  // If exists then password comparision
  const passMatch = await bcrpyt.compare(password, user.password);
  
  // If password does not match
  if(!passMatch){
    res.status(400).json({
      message: "Wrong Credentials"
    })
    return;
  }

  // If password matches then sign a jwt token for user
  const token = jwt.sign({
    userId: user._id
  }, process.env.JWT_USER_SECRET)
  res.json({
    token
  })
})

// What user have purchased
userRouter.get("/purchases", (req, res) => {

})

module.exports = {
  userRouter
}
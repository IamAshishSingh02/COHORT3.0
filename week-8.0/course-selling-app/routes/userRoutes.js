const express = require("express");
const Router = express.Router;
const userRouter = Router();
userRouter.use(express.json());
const {z} = require("zod");
const bcrpyt = require("bcrypt");
const {userModel, adminModel, courseModel, purchaseModel } = require("../db");

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

  res.json({
    message: "You are Signed Up!!"
  })
})

// User SignIn
userRouter.post("/signin", (req, res) => {

})

// What user have purchased
userRouter.get("/purchases", (req, res) => {

})

module.exports = {
  userRouter
}
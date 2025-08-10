const express = require("express");
const Router = express.Router;
const adminRouter = Router();

const {z} = require("zod");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {adminModel} = require("../models/admin")
const {courseModel} = require("../models/course")
const {purchaseModel} = require("../models/purchase");
const {userModel} = require("../models/user");

// Admin SignUp
adminRouter.post("/signup", async (req, res) => {
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
  
    // Input from Admin
    const {email, password, firstName, lastName} = req.body;
  
    // Hashing using Bcrypt
    const hashPassword = await bcrpyt.hash(password, 6);
  
    // Inserting data into Admin Model
    await adminModel.create({
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

// Admin SignIn
adminRouter.post("/signin", async (req, res) => {
  // Input from Admin
    const {email, password} = req.body;
  
    // Finding the Admin in database
    const admin = await adminModel.findOne({
      email
    })
  
    // If Admin does not exists
    if(!admin){
      res.status(400).json({
        message: "Admin does not exists"
      })
      return;
    }
  
    // If exists then password comparision
    const passMatch = await bcrpyt.compare(password, admin.password);
    
    // If password does not match
    if(!passMatch){
      res.status(400).json({
        message: "Wrong Credentials"
      })
      return;
    }
  
    // If password matches then sign a jwt token for admin
    const token = jwt.sign({
      adminId: admin._id
    }, process.env.JWT_ADMIN_SECRET)
    res.json({
      token
    })
})

// Admin can create course
adminRouter.post("/course", (req, res) => {
  
})

// Admin can update the course
adminRouter.put("/course", (req, res) => {
  
})

// Admin can see all the courses
adminRouter.get("/courses", (req, res) => {

})

module.exports = {
  adminRouter
}
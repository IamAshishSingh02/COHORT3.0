const {Router} = require("express");
const adminRouter = Router();
const {userSchema, adminSchema, courseSchema, purchaseSchema} = require("../db");

// Admin SignUp
adminRouter.post("/signup", (req, res) => {

})

// Admin SignIn
adminRouter.post("/signin", (req, res) => {

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
const express = require("express");
const Router = express.Router;
const courseRouter = Router();


const {adminModel} = require("../models/admin")
const {courseModel} = require("../models/course")
const {purchaseModel} = require("../models/purchase");
const {userModel} = require("../models/user");

const {userMiddleware} = require("../middleware/userAuth");

// If User want to purchase any course
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId
  })

  res.json({
    message: "Course purchased Successfully!!"
  })
})

// All Courses preview
courseRouter.get("/preview", async (req, res) => {
  // Finding all the courses from course model
  const courses = await courseModel.find({});

  // Displaying all the courses
  res.json({
    courses
  })
})

module.exports = {
  courseRouter
}
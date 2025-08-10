const express = require("express");
const Router = express.Router;
const courseRouter = Router();


const {adminModel} = require("../models/admin")
const {courseModel} = require("../models/course")
const {purchaseModel} = require("../models/purchase");
const {userModel} = require("../models/user");

// If User want to purchase any course
courseRouter.post("/purchase", (req, res) => {

})

// All Courses preview
courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "These are the Courses available"
  })
})

module.exports = {
  courseRouter
}
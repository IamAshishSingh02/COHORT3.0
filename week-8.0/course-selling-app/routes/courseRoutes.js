const {Router} = require("express");
const courseRouter = Router();
const {userSchema, adminSchema, courseSchema, purchaseSchema} = require("../db");

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
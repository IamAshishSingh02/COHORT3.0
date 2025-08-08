const {Router} = require("express");
const courseRouter = Router();

// If User want to purchase any course
courseRouter.post("/purchase", (req, res) => {

})

// All Courses preview
courseRouter.get("/preview", (req, res) => {

})

module.exports({
  courseRouter
})
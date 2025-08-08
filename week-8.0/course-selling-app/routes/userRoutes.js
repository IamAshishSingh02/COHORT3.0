const {Router} = require("express");
const userRouter = Router();

// User SignUp
userRouter.post("/signup", (req, res) => {

})

// User SignIn
userRouter.post("/signin", (req, res) => {

})

// What user have purchased
userRouter.get("/purchases", (req, res) => {

})

module.exports({
  userRouter
})
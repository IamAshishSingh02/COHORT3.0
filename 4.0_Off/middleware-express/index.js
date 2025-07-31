const express = require("express");
const app = express();

/*
Function that returns a boolean 
If the age is greater than 14 or not
*/ 

// Without middleware
// function isOldEnough(age){
//   if(age >= 14){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// app.get("/ride1", function(req, res){
//   if(isOldEnough(req.query.age)){
//     res.json({
//       msg: "You have succesfully riden the ride"
//     })
//   }
//   else{
//     res.status(411).json({
//       msg: "Sorry you are not of age"
//     })
//   }
// })

// app.get("/ride2", function(req, res){
//   if(isOldEnough(req.query.age)){
//     res.json({
//       msg: "You have succesfully riden the ride2"
//     })
//   }
//   else{
//     res.status(411).json({
//       msg: "Sorry you are not of age"
//     })
//   }
// })

// With middleware
function isOldEnoughMiddleware(req, res, next){
  const age = req.params.age
  if(age >= 14){
    next();
  }
  else{
    res.status(411).json({
      msg: "Sorry you are not of age"
    })
  }
}

app.get("/ride1/:age", isOldEnoughMiddleware, function(req, res){
  res.json({
    msg: "You have succesfully riden the ride"
  })
})

app.get("/ride2/:age", isOldEnoughMiddleware, function(req, res){
  res.json({
    msg: "You have succesfully riden the ride2"
  })
})

app.listen(3000);
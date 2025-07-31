// Hospital Backend Basics with a simple Express.js API 

const express = require("express");
const app = express();
app.use(express.json());

var users = [{
  name: "John",
  kidneys: [{
    healthy: false
  },
  {
    healthy: true
  }]
}]

// 🔍 View the current state of John's kidneys.
app.get("/", function(req, res){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i = 0; i < johnKidneys.length; i++){
    if(johnKidneys[i].healthy){
      numberOfHealthyKidneys ++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

// ➕ Add a new kidney.
app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done!"
  })
})

// 🔁 Making all the kidneys healthy
app.put("/", function(req, res){
  for(let i= 0; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

// ❌ Removing Unhealthy kidneys
app.delete("/", function(req, res){
  const newKidneys = [];
  for(let i = 0; i<users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy: true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Done"});
})

app.listen(3000);
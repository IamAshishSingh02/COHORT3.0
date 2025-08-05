const express = require("express");
const app = express();

// Params [/sum/10/20]
app.get("/sum/:a/:b",function(req, res){
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    answer: a + b
  })
})

// Query Params [/multiply?a=4&b=5]
app.get("/multiply",function(req, res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b
  })
})

app.listen(3000);
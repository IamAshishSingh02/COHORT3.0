const express = require("express");
const cors = require("cors")

const app = express();

// To host frontend and backend on the same port
// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/index.html")
// })

app.use(express.json());
app.use(cors());

app.post("/sum", function(req, res){
  const a = parseFloat(req.body.a)
  const b = parseInt(req.body.b)

  res.json({
    "answer": a + b
  })
})

app.listen(3000);
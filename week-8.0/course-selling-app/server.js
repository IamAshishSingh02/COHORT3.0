const express = require("express");
const {userRouter} = require("./routes/userRoutes");
const {courseRouter} = require("./routes/courseRoutes");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
const express = require("express");
const app = express();
app.use(express.json());

const {adminRouter} = require("./routes/adminRoutes");
const {userRouter} = require("./routes/userRoutes");
const {courseRouter} = require("./routes/courseRoutes");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

const mongoose = require("mongoose");
require('dotenv').config();
const PORT = 3000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Successfully connected to MongoDB!");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

startServer();
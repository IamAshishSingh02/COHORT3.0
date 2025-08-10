const express = require("express");
require('dotenv').config();
const {adminRouter} = require("./routes/adminRoutes");
const {userRouter} = require("./routes/userRoutes");
const {courseRouter} = require("./routes/courseRoutes");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

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
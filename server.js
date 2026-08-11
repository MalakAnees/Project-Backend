const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const taskRoutes = require("./routes/task.routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Smart Task Management API is running"
    });
});

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });
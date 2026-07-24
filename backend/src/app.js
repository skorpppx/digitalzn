const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();

// Middleware
app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Digital ZN API"
    });
});

app.use("/api/contact", contactRoutes);

module.exports = app;
const express = require("express");

const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const contactRoutes = require("./routes/contact.routes");

const app = express();

const adminRoutes = require("./routes/admin.routes");

// Middleware
app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "digitalzn-production.up.railway.app",
        "https://www.digital-zn.com",
        "https://digital-zn.com"
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

app.use("/api/admin",adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

module.exports = app;
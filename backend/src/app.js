const express = require("express");
const contactRoutes = require("./routes/contact.routes");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Digital 123 API"
    });
});
app.use("/api/contact", contactRoutes);
module.exports = app;
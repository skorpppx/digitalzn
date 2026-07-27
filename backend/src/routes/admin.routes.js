const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin.controller");

const { authenticate } = require("../middleware/auth.middleware");

router.get(
    "/messages",
    authenticate,
    adminController.getMessages
);

module.exports = router;
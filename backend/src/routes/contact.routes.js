const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contact.controller");

const { contactValidation } = require("../validators/contact.validator");

const { validate } = require("../middleware/validation.middleware");

router.get("/", contactController.getContact);

router.post(
    "/",
    contactValidation,
    validate,
    contactController.createContact
);

module.exports = router;
const { body } = require("express-validator");

exports.contactValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email"),

    body("message")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Message must be at least 10 characters")

];
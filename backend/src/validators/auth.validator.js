const { body } = require("express-validator");

exports.loginValidation = [

    body("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")

];
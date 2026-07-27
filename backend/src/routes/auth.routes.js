const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

const { loginValidation } = require("../validators/auth.validator");

const { validate } = require("../middleware/validation.middleware");

router.post(
    "/login",
    loginValidation,
    validate,
    authController.login
);
const { authenticate } = require("../middleware/auth.middleware");

router.get(

    "/profile",

    authenticate,

    (req, res) => {

        res.json({

            success: true,

            user: req.user

        });

    }

);
router.get(
    "/me",
    authenticate,
    (req, res) => {

        res.json({
            success: true,
            user: req.user
        });

    }
);
module.exports = router;
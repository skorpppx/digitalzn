const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const jwtConfig = require("../config/jwt");

const authService = require("../services/auth.service");

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const admin =
            await authService.findAdminByEmail(email);

        if (!admin) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password."

            });

        }

        const validPassword =
            await bcrypt.compare(
                password,
                admin.password
            );

        if (!validPassword) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password."

            });

        }

const token = jwt.sign(

    {

        id: admin.id,

        email: admin.email

    },

    jwtConfig.secret,

    {

        expiresIn: jwtConfig.expiresIn

    }

);

res.json({

    success: true,

    token

});

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

require("dotenv").config();
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "../../.env")
});
const pool = require("../database/connection");
const hashPassword = require("../utils/hashPassword");
(async () => {

    const email = "contact@digital-zn.com";

    const password = "DigitalZN123";

    const hashedPassword = await hashPassword(password);

    await pool.query(
        `
        INSERT INTO admins
        (
            email,
            password
        )
        VALUES
        (
            $1,
            $2
        );
        `,
        [
            email,
            hashedPassword
        ]
    );

    console.log("✅ Admin created");

    process.exit();

})();
console.log(process.env.DB_HOST);
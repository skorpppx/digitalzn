require("dotenv").config();
const pool = require("./connection");

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log("✅ Database Connected");

        console.log(result.rows);

    } catch (error) {

        console.error(error);

    }
}
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_NAME);
testConnection();
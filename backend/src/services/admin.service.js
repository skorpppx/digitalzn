const pool = require("../database/connection");

async function getMessages(){

    const result = await pool.query(`

        SELECT *

        FROM contacts

        ORDER BY created_at DESC

    `);

    return result.rows;

}

module.exports={

    getMessages

};
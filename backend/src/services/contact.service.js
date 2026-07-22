const pool = require("../database/connection");

async function createContact(contact) {

    const query = `
        INSERT INTO contacts(name, email, message)
        VALUES($1, $2, $3)
        RETURNING *;
    `;

    const values = [
        contact.name,
        contact.email,
        contact.message
    ];

    const result = await pool.query(query, values);

    return result.rows[0];

}

module.exports = {
    createContact
};
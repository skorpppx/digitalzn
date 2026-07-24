const pool = require("../database/connection");

async function createContact(contact) {

    const query = `
INSERT INTO contacts
(
    name,
    email,
    phone,
    services,
    message
)
VALUES
(
    $1,
    $2,
    $3,
    $4,
    $5
)
RETURNING *;
    `;

const values = [

    contact.name,

    contact.email,

    contact.phone,

    contact.services,

    contact.message

];

    const result = await pool.query(query, values);

    return result.rows[0];

}

module.exports = {
    createContact
};
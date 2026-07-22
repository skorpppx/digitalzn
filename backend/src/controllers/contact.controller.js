const contactService = require("../services/contact.service");
exports.getContact = (req, res) => {

    res.json({
        success: true,
        message: "GET Contact"
    });

};

exports.createContact = async (req, res) => {

    try {

        const contact =
            await contactService.createContact(req.body);

        res.status(201).json({

            success: true,

            message: "Contact saved successfully.",

            data: contact

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};
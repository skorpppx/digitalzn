const adminService = require("../services/admin.service");

exports.getMessages = async (req, res) => {

    try {

        const messages =
            await adminService.getMessages();

        res.json({

            success: true,

            data: messages

        });

    }

    catch(error){

        console.error(error);

        res.status(500).json({

            success:false,

            message:"Internal Server Error"

        });

    }

};
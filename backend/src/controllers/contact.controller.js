exports.getContact = (req, res) => {

    res.json({
        success: true,
        message: "GET Contact"
    });

};

exports.createContact = (req, res) => {

    console.log(req.body);

    res.status(201).json({

        success: true,

        message: "Welcome to Digital ZN Backend",
        
        timestamp: new Date(),

        data: req.body

    });

};
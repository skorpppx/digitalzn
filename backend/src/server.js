require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`🚀 ${process.env.APP_NAME} running on port ${PORT}`);
});
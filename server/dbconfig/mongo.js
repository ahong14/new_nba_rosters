const mongoose = require('mongoose');
require('dotenv').config();

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI), {
            useNewUrlParser: true
        };
        console.log("Connected to mongo successfully");

    } catch (err) {
        console.error("Error connecting to mongo: ", err);
        process.exit();
    }
}
module.exports = connectMongo;
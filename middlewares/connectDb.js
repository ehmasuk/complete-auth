const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const result = await mongoose.connect(process.env.DATABASE_CONNECTION_URL, { dbName: process.env.DATABASE_NAME });
        result ? console.log("Connected to database") : console.log("Cannot connect to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;

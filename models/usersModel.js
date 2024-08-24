const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required",
    },
    email: {
        type: String,
        required: true,
        message: "Email is required",
    },
    address: String,
    password: {
        type: String,
        required: true,
        message: "Password is required",
    },
    isAdmin: {
        type: String,
        default: false,
    },
    isBanned: {
        type: String,
        default: false,
    },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

const { createToken } = require("../middlewares/jwtToken");
const { successHandler, errorHandler } = require("../middlewares/responseHandler");
const sendEmail = require("../middlewares/sendEmail");
const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const registerController = async (req, res, next) => {
    const { name, email, password } = req.body;

    // check user is already exists
    const userExit = await usersModel.exists({ email });
    if (userExit) {
        return errorHandler(res, { message: "User already exits" });
    }

    // encode password
    const encodedPassword = bcrypt.hashSync(password, 10);

    const token = await createToken({ name, email, password: encodedPassword });

    const sendVerifyEmail = sendEmail({ to: email, subject: "Activate your account", html: token });

    if (sendVerifyEmail) {
        return successHandler(res, { message: "Please check you email " + email });
    } else {
        return errorHandler(res, { message: "Something went wrong" });
    }
};

module.exports = registerController;

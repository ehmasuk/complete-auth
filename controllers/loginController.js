const { errorHandler, successHandler } = require("../middlewares/responseHandler");
const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");


const loginController = async (req, res, next) => {
    const { email, password } = req.body;

    // find user
    const user = await usersModel.findOne({ email });
    if (!user) {
        return errorHandler(res, { message: "Authentication failed" });
    }

    // check password is correct or not
    const isValdPassword = await bcrypt.compare(password, user.password);

    if (!isValdPassword) {
        return errorHandler(res, { message: "Authentication failed" });
    } else {
        return successHandler(res, { message: "Loged in successfully" });
    }
}

module.exports = loginController
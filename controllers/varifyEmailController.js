const { varifyToken } = require("../middlewares/jwtToken");
const { successHandler, errorHandler } = require("../middlewares/responseHandler");
const usersModel = require("../models/usersModel");

const varifyEmailController = async (req, res, next) => {
    const { token } = req.body;

    // varify token
    const userInfo = await varifyToken(token);

    if (userInfo) {
        // create user
        try {
            const newUser = await usersModel.create({
                name: userInfo.name,
                email: userInfo.email,
                password: userInfo.password,
            });
            if (newUser) {
                const data = {
                    name: newUser.name,
                    email: newUser.email,
                };
                return successHandler(res, { status: 202, message: "User created successfully", data });
            } else {
                return errorHandler(res, { message: "User creation failed" });
            }
        } catch (error) {
            console.log(error);
            return res.send(error);
        }
    } else {
        return errorHandler(res, { message: "Invalid token" });
    }
};

module.exports = varifyEmailController;

var jwt = require("jsonwebtoken");

const createToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return token;
    } catch (error) {
        console.log(error);
    }
};

const varifyToken = async (token) => {
    try {
        const isValid = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        return isValid;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createToken, varifyToken };

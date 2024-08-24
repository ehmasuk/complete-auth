const { check, validationResult } = require("express-validator");

const validateRegiter = [
    check("name").trim().notEmpty().withMessage("Name is required"),
    check("email").trim().notEmpty().withMessage("Email is required"),
    check("password").trim().notEmpty().withMessage("Password is required"),
];

const applyValidationResult = (req, res, next) => {
    // check is there any error
    const isValid = validationResult(req);

    if (!isValid.isEmpty()) {
        var errors = isValid.formatWith((error) => error.msg);
        errors = errors.array();
        return res.send(errors);
    } else {
        next();
    }
};

module.exports = { applyValidationResult, validateRegiter };

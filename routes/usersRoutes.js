const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const varifyEmailController = require("../controllers/varifyEmailController");
const { successHandler } = require("../middlewares/responseHandler");
const usersModel = require("../models/usersModel");
const { validateRegiter, applyValidationResult } = require("../middlewares/validators");
const router = require("express").Router();

/* -------------------------------------------------------------------------- */
/*                                GET ALL USER                                */
/* -------------------------------------------------------------------------- */
router.get("/", async (req, res, next) => {
    const allUsers = await usersModel.find({}, { password: false });
    if (allUsers) {
        return successHandler(res, { data: allUsers });
    } else {
        return successHandler(res, { message: "Something went wrong" });
    }
});

/* -------------------------------------------------------------------------- */
/*                                REGISTER USER                                */
/* -------------------------------------------------------------------------- */
router.post("/register", validateRegiter, applyValidationResult, registerController);

/* -------------------------------------------------------------------------- */
/*                                LOGIN USER                                */
/* -------------------------------------------------------------------------- */
router.post("/login", loginController);

/* -------------------------------------------------------------------------- */
/*                                VARIFY EMAIL                                */
/* -------------------------------------------------------------------------- */

router.post("/varify-email", varifyEmailController);

module.exports = router;

require("dotenv").config();
const express = require("express");
const middlewares = require("./middlewares");
const routes = require("./routes");
const { errorHandler } = require("../middlewares/responseHandler");
const connectDb = require("../middlewares/connectDb");
const app = express();

/* -------------------------------------------------------------------------- */
/*                              CONNECT DATABASE                              */
/* -------------------------------------------------------------------------- */
connectDb();

/* -------------------------------------------------------------------------- */
/*                                 MIDDLEWARES                                */
/* -------------------------------------------------------------------------- */
middlewares(app);

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */
routes(app);

/* -------------------------------------------------------------------------- */
/*                                ERROR HANDLE                                */
/* -------------------------------------------------------------------------- */
app.use((req, res, next) => {
    errorHandler(res, { message: "Route not found" });
});

module.exports = app;

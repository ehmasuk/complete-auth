const usersRoutes = require("./../routes/usersRoutes");

const routes = (app) => {
    app.get("/", (req, res, next) => {
        res.send("Welcome");
    });

    app.use("/api/users", usersRoutes);
};

module.exports = routes;

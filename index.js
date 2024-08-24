const app = require("./app/app");

/* -------------------------------------------------------------------------- */
/*                                CREATE SERVER                               */
/* -------------------------------------------------------------------------- */
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on http://localhost:" + port);
});

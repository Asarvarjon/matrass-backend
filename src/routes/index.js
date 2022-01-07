const CustomerRouter = require("./CustomerRoute");
const UserRouter = require("./UserRoute");

const Router = require("express").Router();

Router.use("/users", UserRouter);


Router.use("/customers", CustomerRouter)


module.exports = Router;
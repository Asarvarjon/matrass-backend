const UserRouter = require("./UserRoute");

const Router = require("express").Router();

Router.use("/users", UserRouter);


module.exports = Router;
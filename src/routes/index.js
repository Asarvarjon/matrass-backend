const CategoryRouter = require("./CategoryRoute");
const CustomerRouter = require("./CustomerRoute");
const UserRouter = require("./UserRoute");

const Router = require("express").Router();

Router.use("/users", UserRouter);
Router.use("/categories", CategoryRouter)
Router.use("/customers", CustomerRouter)


module.exports = Router;
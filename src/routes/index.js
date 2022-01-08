const CategoryRouter = require("./CategoryRoute");
const CustomerRouter = require("./CustomerRoute");
const LocationRouter = require("./LocationRoute");
const TechnologyRouter = require("./TechnologyRoute");
const UserRouter = require("./UserRoute");

const Router = require("express").Router();

Router.use("/users", UserRouter);
Router.use("/categories", CategoryRouter);
Router.use("/customers", CustomerRouter);
Router.use("/technologies", TechnologyRouter);
Router.use("/locations", LocationRouter);

module.exports = Router;
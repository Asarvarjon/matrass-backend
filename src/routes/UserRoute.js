const { AdminLoginController } = require("../controllers/UserController");

const UserRouter = require("express").Router();

UserRouter.post("/login", AdminLoginController);

module.exports = UserRouter;
const { OrderPostController } = require("../controllers/OrderController");
const { OrderGetController } = require("../controllers/OrderController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const OrderRouter = require("express").Router();

OrderRouter.post("/", OrderPostController);
OrderRouter.get("/", AuthMiddleware,  OrderGetController);

module.exports = OrderRouter;
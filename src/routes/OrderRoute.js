const { OrderPostController } = require("../controllers/OrderController");

const OrderRouter = require("express").Router();

OrderRouter.post("/", OrderPostController);

module.exports = OrderRouter;
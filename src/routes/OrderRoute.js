const { OrderPostController } = require("../controllers/OrderController");
const { OrderGetController } = require("../controllers/OrderController");

const OrderRouter = require("express").Router();

OrderRouter.post("/", OrderPostController);
OrderRouter.get("/", OrderGetController);

module.exports = OrderRouter;
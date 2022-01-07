const { CustomerPostController } = require("../controllers/CustomersController");

const CustomerRouter = require("express").Router(); 

CustomerRouter.post("/", CustomerPostController)

module.exports = CustomerRouter;
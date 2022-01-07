const { CustomerPostController, CustomerDeleteController, CustomersGetController, CustomerUpdateController } = require("../controllers/CustomersController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const CustomerRouter = require("express").Router(); 

CustomerRouter.post("/", CustomerPostController);
CustomerRouter.get("/", AuthMiddleware, CustomersGetController) 
CustomerRouter.delete("/delete/:customer_id", AuthMiddleware, CustomerDeleteController)
CustomerRouter.put("/:customer_id", AuthMiddleware, CustomerUpdateController)

module.exports = CustomerRouter;
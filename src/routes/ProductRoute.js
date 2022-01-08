const { ProductCreatePostController, ProductGetController, ProductUpdateController, ProductDeleteController } = require("../controllers/ProductController");
const expressFileUpload = require("express-fileupload");
const Authmiddleware = require("../middlewares/AuthMiddleware")
const ProductRouter = require("express").Router()


 
ProductRouter.post("/", expressFileUpload(), ProductCreatePostController);
ProductRouter.get("/", ProductGetController);
ProductRouter.put("/:product_id", expressFileUpload(), ProductUpdateController);
ProductRouter.delete("/:product_id", ProductDeleteController)

module.exports = ProductRouter;
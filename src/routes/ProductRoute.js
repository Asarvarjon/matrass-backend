const { ProductCreatePostController, ProductGetController, ProductUpdateController, ProductDeleteController } = require("../controllers/ProductController");
const expressFileUpload = require("express-fileupload");
const Authmiddleware = require("../middlewares/AuthMiddleware")
const ProductRouter = require("express").Router()

// ProductRouter.use(Authmiddleware)

 
ProductRouter.post("/", [Authmiddleware,expressFileUpload()], ProductCreatePostController);
ProductRouter.get("/", ProductGetController);
ProductRouter.put("/:product_id", [Authmiddleware, expressFileUpload()], ProductUpdateController);
ProductRouter.delete("/:product_id", Authmiddleware, ProductDeleteController)

module.exports = ProductRouter;
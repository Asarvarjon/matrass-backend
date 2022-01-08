const { ProductCreatePostController } = require("../controllers/ProductController");
const expressFileUpload = require("express-fileupload");
const Authmiddleware = require("../middlewares/AuthMiddleware")
const ProductRouter = require("express").Router()


 
ProductRouter.post("/", expressFileUpload(), ProductCreatePostController)

module.exports = ProductRouter;
const { CategoryGetController, CategoryCreatePostController, CategoryUpdateController, CategoryDeleteController } = require("../controllers/CategoriesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const CategoryRouter = require("express").Router();  


CategoryRouter.get("/", CategoryGetController);
CategoryRouter.post("/", AuthMiddleware, CategoryCreatePostController);
CategoryRouter.put("/:category_id", AuthMiddleware, CategoryUpdateController);
CategoryRouter.delete("/:category_id", AuthMiddleware, CategoryDeleteController);


module.exports = CategoryRouter;
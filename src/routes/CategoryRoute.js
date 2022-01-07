const { CategoryGetController, CategoryCreatePostController, CategoryUpdateController, CategoryDeleteController } = require("../controllers/CategoriesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const CategoryRouter = require("express").Router();  

CategoryRouter.use(AuthMiddleware);

CategoryRouter.get("/", CategoryGetController);
CategoryRouter.post("/", CategoryCreatePostController);
CategoryRouter.put("/:category_id", CategoryUpdateController);
CategoryRouter.delete("/:category_id", CategoryDeleteController);


module.exports = CategoryRouter;
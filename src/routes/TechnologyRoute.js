const { TechnologyGetController, TechnologyCreateController, TechnologyUpdateController, TechnologyDeleteController } = require("../controllers/TechnologiesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const TechnologyRouter = require("express").Router();  


TechnologyRouter.get("/", TechnologyGetController);
TechnologyRouter.post("/", AuthMiddleware, TechnologyCreateController);
TechnologyRouter.put("/:technology_id", AuthMiddleware, TechnologyUpdateController);
TechnologyRouter.delete("/:technology_id", AuthMiddleware, TechnologyDeleteController);

module.exports = TechnologyRouter;
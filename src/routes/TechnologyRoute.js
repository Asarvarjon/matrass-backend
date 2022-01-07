const { TechnologyGetController, TechnologyCreateController, TechnologyUpdateController, TechnologyDeleteController } = require("../controllers/TechnologiesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const TechnologyRouter = require("express").Router();  

TechnologyRouter.use(AuthMiddleware);

TechnologyRouter.get("/", TechnologyGetController);
TechnologyRouter.post("/", TechnologyCreateController);
TechnologyRouter.put("/:technology_id", TechnologyUpdateController);
TechnologyRouter.delete("/:technology_id", TechnologyDeleteController);

module.exports = TechnologyRouter;
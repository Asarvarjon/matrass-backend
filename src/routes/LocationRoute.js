const { LocationCreatePostController, LocationGetController, LocationUpdateController, LocationDeleteController } = require("../controllers/LocationsController");
const Authmiddleware = require("../middlewares/AuthMiddleware");

const expressFileUpload = require("express-fileupload")

const LocationRouter = require("express").Router();

LocationRouter.use(Authmiddleware)
 
LocationRouter.post("/", expressFileUpload(), LocationCreatePostController)
LocationRouter.get("/", LocationGetController);
LocationRouter.put("/:location_id", expressFileUpload(), LocationUpdateController);
LocationRouter.delete("/:location_id", LocationDeleteController);

module.exports = LocationRouter;
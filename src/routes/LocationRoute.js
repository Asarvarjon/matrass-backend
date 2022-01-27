const { LocationCreatePostController, LocationGetController, LocationUpdateController, LocationDeleteController } = require("../controllers/LocationsController");
const Authmiddleware = require("../middlewares/AuthMiddleware");

const expressFileUpload = require("express-fileupload")

const LocationRouter = require("express").Router();

 
LocationRouter.post("/", [Authmiddleware, expressFileUpload()], LocationCreatePostController)
LocationRouter.get("/", LocationGetController);
LocationRouter.put("/:location_id", [Authmiddleware ,expressFileUpload()], LocationUpdateController);
LocationRouter.delete("/:location_id", Authmiddleware, LocationDeleteController);

module.exports = LocationRouter;
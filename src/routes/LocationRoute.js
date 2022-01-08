const { LocationCreatePostController } = require("../controllers/LocationsController");
const Authmiddleware = require("../middlewares/AuthMiddleware");

const expressFileUpload = require("express-fileupload")

const LocationRouter = require("express").Router();
 
LocationRouter.post("/", expressFileUpload(), LocationCreatePostController)

module.exports = LocationRouter;
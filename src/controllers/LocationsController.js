const path = require("path");
const { LocationCreateValidations } = require("../validations/LocationValidations");

module.exports = class LocationsController {
    static async LocationGetController(req, res, next) {
        try {
            const locations = await req.db.locations.findAll({
                order: [ ["updatedAt", "DESC"] ],
                raw: true
            })

            res.status(200).json({
                ok: true,
                message: "Locations",
                data: {
                    locations
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async LocationDeleteController(req, res, next) {
        try {
            
            const location_id = req.params.location_id;

            const location = req.db.locations.findOne({
                where: {
                    location_id
                }
            })

            if(!location) throw new res.error("Location is not found!");

            await req.db.locations.destroy({
                where: {
                    location_id
                }
            })

            res.status(200).json({
                ok: true,
                message: "Location deleted succesfully!"
            })

        } catch (error) {
            next(error)
        }
    }

    static async LocationCreatePostController(req, res, next) {
        try {

            const data = await LocationCreateValidations(req.body, res.error);
            let photos = req.files.photos;

            if(!Array.isArray(photos)) {
                photos = [req.files?.photos]
            };

            if(!photos) throw new res.error(400, "Files are not found!");
            if(photos?.length > 3) throw new res.error(400, "Files are to many!");
            
            let photoNames = [];

            for(let photo of photos) {
                photoNames.push(photo.md5 + getExtension(photo.name));

                await photo.mv(path.join(__dirname, "..", "public", "files", photo.md5 + getExtension(photo.name)))
            }  

            const location = await req.db.locations.create({
                location_name: data.location_name,
                location_link: data.location_link,
                location_description: data.location_description,
                location_status: data.location_status,
                location_photo: photoNames
            });

            res.status(201).json({
                ok: true,
                message: "Location was added succesfully!"
            })



        } catch (error) {
            next(error)
        }
    }
}

function getExtension(filename) {
	var i = filename.lastIndexOf(".");
	return i < 0 ? "" : filename.substr(i); 
}
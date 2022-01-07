const { TechnologyCreateValidation } = require("../validations/TechnologyValidations");

module.exports = class TechnologiesController {
    static async TechnologyGetController(req, res, next) {
        try {
            const technologies = await req.db.technologies.findAll({
                order:[['updatedAt', 'DESC']],
                raw: true
            })

            res.status(200).json({
                ok: true,
                message: "Technologies",
                data: {
                    technologies
                }
            })
        } catch (error) {
            next(error)
        }
    }


    static async TechnologyCreateController(req, res, next) {
        try {
            const data = await TechnologyCreateValidation(req.body, res.error);

            const technology = await req.db.technologies.create({
                technology_name: data.technology_name,
                technology_photo_link: data.technology_photo_link,
                technology_video_link: data.technology_video_link,
                technology_description: data.technology_description,
                technology_status: data.technology_status
            });

            res.status(201).json({
                ok: true,
                message: "Technology created succesfully"
            })
        } catch (error) {
            next(error)
        }
    } 


    static async TechnologyDeleteController(req, res, next) {
        try {
            const technology_id = req.params.technology_id;

            const technology = await req.db.technologies.findOne({
                where: {
                    technology_id
                }
            });

            if(!technology) throw new res.error("Technology is not found!");

            await req.db.technologies.destroy({
                where: {
                    technology_id: technology_id
                }
            });

            res.status(200).json({
                ok: true,
                message: "Deleted succesfully!"
            })
        } catch (error) {
            next(error)
        }
    }


    static async TechnologyUpdateController(req, res, next){
        try {
            const technology_id = req.params.technology_id;
            
            const technology = await req.db.technologies.findOne({
                where: {
                    technology_id
                }
            });

            if(!technology) throw new res.error("Technology is not found!"); 

            const data = await TechnologyCreateValidation(req.body, res.error); 

            await req.db.technologies.update({
                technology_name: data.technology_name,
                technology_photo_link: data.technology_photo_link,
                technology_video_link: data.technology_video_link,
                technology_description: data.technology_description,
                technology_status: data.technology_status
            },
            {
                where: {
                    technology_id
                }
            }
            );

            res.status(200).json({
                ok: true,
                message: "Updated succesfully!"
            })
        } catch (error) {
            next(error)
        }
    }
}
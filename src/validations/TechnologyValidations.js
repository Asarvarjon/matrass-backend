const Joi = require("joi"); 

module.exports = class TechnologyRouter {
    static async TechnologyCreateValidation(data, CustomError) {
        return await Joi.object({
            technology_name: Joi
					.string()
					.required()
					.error(new CustomError(400, "Texnologiya nomi noto'g'ri holatda")),
            technology_photo_link: Joi
					.string()
					.required()
					.error(new CustomError(400, "Rasm linki noto'g'ri holatda")),
            technology_video_link: Joi
					.string()
					.required()
					.error(new CustomError(400, "Video linki noto'g'ri holatda")),
            technology_description: Joi
                    .string()
                    .required()
                    .error(new CustomError(400, "Texnologiya ta'rifi noto'g'ri holatda")),
            technology_status: Joi
                    .string()
                    .required()
                    .valid("active", "inactive")
                    .error(new CustomError(400, "Texnologiya statusi noto'g'ri holatda")),
        }).validateAsync(data);
    }
}
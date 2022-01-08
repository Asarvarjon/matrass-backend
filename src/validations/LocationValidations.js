const Joi = require("joi"); 

module.exports = class LocationValidations {
    static async LocationCreateValidations(data, CustomError) {
        return await Joi.object({
            location_name: Joi
					.string()
                    .min(3)
					.required()
					.error(new CustomError(400, "Manzil nomi noto'g'ri holatda!")),
            location_link: Joi
					.string()
                    .min(5)
					.required()
					.error(new CustomError(400, "Manzil havolasi noto'g'ri holatda!")),
            location_description: Joi
					.string()
                    .min(10)
					.required()
					.error(new CustomError(400, "Manzil ta'rifi noto'g'ri holatda!")),
            location_status: Joi
                    .string()
                    .required()
                    .valid("active", "inactive")
                    .error(new CustomError(400, "Manzil statusi noto'g'ri holatda!")),
        }).validateAsync(data);
    }
}
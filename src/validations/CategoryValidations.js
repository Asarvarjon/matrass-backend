const Joi = require("joi"); 

module.exports = class CategoryValidations {
    static async CategoryPostValidation(data, CustomError) {
        return await Joi.object({
            category_name: Joi
					.string()
					.required()
					.error(new CustomError(400, "Toifa nomi noto'g'ri holatda")),
        }).validateAsync(data);
    }
}
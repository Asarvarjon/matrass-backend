const Joi = require("joi"); 

module.exports = class CustomerValidations {
    static async CustomerPostValidation(data, CustomError) {
        return await Joi.object({
            phone: joi
					.string()
					.required().
					regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/)
					.error(new Error(400, "Raqam noto'g'ri holatda!")),
        }).validateAsync(data);
    }
}
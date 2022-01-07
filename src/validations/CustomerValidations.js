const Joi = require("joi"); 

module.exports = class CustomerValidations {
    static async CustomerPostValidation(data, CustomError) {
        return await Joi.object({
            phone: Joi
					.string()
					.required().
					regex(/^[+]998([3-9][012345789]|6[125679]|7[01234569])[0-9]{7}$/)
					.error(new CustomError(400, "Raqam noto'g'ri holatda!")),
        }).validateAsync(data);
    }
}
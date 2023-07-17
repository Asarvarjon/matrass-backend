const Joi = require("joi"); 

module.exports = class AdminValidations {
    static async AdminLoginValidation(data, CustomError) {
        return await Joi.object({
            user_login: Joi.string().error(new CustomError(400, "Login xato")),
            user_password: Joi.string()
            .error(new CustomError(400, "Parolingiz xato"))
        }).validateAsync(data);
    }
}

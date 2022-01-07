const { compareCrypt } = require("../modules/bcrypt");
const { createToken } = require("../modules/jsonwebtoken"); 
const { CustomerPostValidation } = require("../validations/CustomerValidations");

module.exports = class UserController {
    static async CustomerPostController(req, res, next) {
        try {
             
             const phone = await CustomerPostValidation(req.body, res.error);

             console.log(phone);

        } catch (error) {
            next(error)
        }
    }
}
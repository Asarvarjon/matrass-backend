const { OrderPostValidations } = require("../validations/OrderValidations");

module.exports = class ProductController{
    static async OrderPostController(req, res, next) {
        try {
            console.log(req.body);
        } catch (error) {
            next(error)
        }
    }
}
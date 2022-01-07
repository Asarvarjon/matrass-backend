const { compareCrypt } = require("../modules/bcrypt");
const { createToken } = require("../modules/jsonwebtoken"); 
const { CustomerPostValidation } = require("../validations/CustomerValidations");

module.exports = class UserController {
    static async CustomerPostController(req, res, next) {
        try {
             
             const data = await CustomerPostValidation(req.body, res.error);

             let date = new Date();
             date = date.toUTCString();  

             const newCustomer = await req.db.customers.create({
                customer_contact_date: date,
                customer_number: data.phone,
             })

             res.status(201).json({
                 ok: true,
                 message: "Customer added succesfully"
             })

        } catch (error) { 
            next(error)
        }
    }
}

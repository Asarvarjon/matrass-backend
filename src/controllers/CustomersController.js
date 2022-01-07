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

    static async CustomerDeleteController(req, res, next) {
       try {
            const customer_id = req.params.customer_id;

            const customer = await req.db.customers.findOne({
                where: {
                    customer_id
                }
            })

            if(!customer) throw new res.error("Customer not found!");

            await req.db.customers.destroy({
                where: {
                    customer_id
                }
            });

            res.status(200).json({
                ok: true,
                message: "Customer deleted succesfully!"
            })
       } catch (error) { 
           next(error)
       }
    }

    static async CustomersGetController(req, res, next) {
        try {
            const customers = await req.db.customers.findAll({
                order:[['updatedAt', 'DESC']],
                raw: true
            }) 

            res.status(200).json({
                ok: true,
                message: "Customers",
                data: {
                    customers
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async CustomerUpdateController(req, res, next) {
        try {
            const customer_id = req.params.customer_id;

            const customer = await req.db.customers.findOne({
                where: {
                    customer_id
                }
            })

            if(!customer) throw new res.error("Customer is not found!");

            await req.db.customers.update({
                contacted: true
            },
            {
                where: {
                    customer_id
                }
            }
            );

            res.status(200).json({
                ok: true,
                message: "Updated succesfully"
            })

        } catch (error) {
            next(error)
        }
    }
}

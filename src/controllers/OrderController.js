const { OrderPostValidations } = require("../validations/OrderValidations");

module.exports = class ProductController{
    static async OrderPostController(req, res, next) {
        try {
            const data = await OrderPostValidations(req.body, res.error);

            if(!data) {
                throw new res.error(401, "Bad request!");
            }

            const order = await req.db.orders.create({
                user_name: data.user_name,
                user_phone: data.user_phone,
                order_name: data.order_name,
                order_amount: data.order_amount,
                order_contacted: data.order_contacted
            });

            console.log(order);

            res.status(201).json({
                ok: true,
                message: "Order created succesfully"
            });

        } catch (error) {
            console.error(error);
            next(error);
        }
    };

    static async OrderGetController(req, res, next) {
        try {
            const order = await req.db.orders.findAll({
                raw: true,
            });

            console.log(order);
            
            res.status(201).json({
                ok: true,
                message: "Orders",
                data: {
                    order,
                }
            })
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}
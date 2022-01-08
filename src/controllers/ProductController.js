module.exports = class ProductController{
    static async ProductGetController(req, res, next) {
        try {
            const products = await req.db.products.findAll({
                order: [[ "updatedAt", "DESC" ]],
                raw: true
            })

            res.status(201).json({
                ok: true,
                message: "Products",
                data: {
                    products
                }
            })
        } catch (error) {
            next(error)
        }
    }
}
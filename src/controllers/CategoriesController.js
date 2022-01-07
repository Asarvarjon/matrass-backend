const { CategoryPostValidation } = require("../validations/CategoryValidations")

module.exports = class CategoriesController{
    static async CategoryGetController(req, res, next) {
        try {
            const categories = await req.db.categories.findAll({
                order:[['updatedAt', 'DESC']],
                raw: true
            })

            res.status(200).json({
                ok: true,
                message: "Categories",
                data: {
                    categories
                }
            })
        } catch (error) {
            next(error)
        }
    }


    static async CategoryCreatePostController(req, res, next) {
        try {
            const data = await CategoryPostValidation(req.body, res.error);

            const category = await req.db.categories.create({
                category_name: data.category_name
            });

            res.status(201).json({
                ok: true,
                message: "Category created succesfully"
            })
        } catch (error) {
            next(error)
        }
    }

    static async CategoryUpdateController(req, res, next) {
        try {
            const category_id = req.params.category_id;
            
            const category = await req.db.categories.findOne({
                where: {
                    category_id
                }
            });

            if(!category) throw new res.error("Category not found!"); 
            const data = await CategoryPostValidation(req.body, res.error); 

            await req.db.categories.update({
                category_name: data.category_name
            },
            {
                where: {
                    category_id
                }
            }
            );

            res.status(200).json({
                ok: true,
                message: "Updated succesfully!"
            })


        } catch (error) {
            next(error)
        }
    }


    static async CategoryDeleteController(req, res, next) {
        try {
            const category_id = req.params.category_id;

            const category = await req.db.categories.findOne({
                where: {
                    category_id
                }
            });

            if(!category) throw new res.error("Category not found!"); 

            await req.db.categories.destroy({
                where: {
                    category_id: category_id
                }
            })
            
            res.status(200).json({
                ok: true,
                message: "Deleted succesfully!"
            })
        } catch (error) {
            next(error)
        }
    }
}
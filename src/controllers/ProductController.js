const { ProductCreatValidations } = require("../validations/ProductValidations");
const fs = require("fs");
const path = require('path')

module.exports = class ProductController{
    static async ProductGetController(req, res, next) {
        try {
            const products = await req.db.products.findAll({
                order: [[ "updatedAt", "DESC" ]],
                raw: true,
                include: [
                    {
                        model: req.db.categories
                    }
                ]
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


    static async ProductCreatePostController(req, res, next) {
        try {
            
            const data = await ProductCreatValidations(req.body, res.error);

            let photos = req.files?.photos;

            if(!Array.isArray(photos)) {
                photos = [req.files?.photos]
            };

            if(!photos) throw new res.error(400, "Files are not found!");
            if(photos?.length > 3) throw new res.error(400, "Files are to many!");
            
            let photoNames = [];

            for(let photo of photos) {
                photoNames.push(photo.md5 + getExtension(photo.name));

                await photo.mv(path.join(__dirname, "..", "public", "files", photo.md5 + getExtension(photo.name)))
            };
            
            const product = await req.db.products.create({
                ...data,
                product_photo: photoNames
            })

            res.status(201).json({
                ok: true,
                message: "Product added succesfully!"
            })

            

        } catch (error) {
            next(error)
        }
    }

    static async ProductDeleteController(req, res, next) {
        try {
            const product_id = req.params.product_id;

            const product = await req.db.products.findOne({
                where: {
                    product_id
                }, 
                raw: true
            })

            if(!product) throw new res.error(400, "Product is not found!");
 
            for(let item of product.product_photo) {
                fs.unlink(
                    path.join(
                        __dirname, 
                        "..",
                        "public",
                        "files",
                        item
                    ), () => {}
                )

            } 

            await req.db.products.destroy({
                where: {
                    product_id
                }
            })

            res.status(200).json({
                ok: true,
                message: "Product deleted succesfully!"
            })
        } catch (error) {
            next(error)
        }
    }

    static async ProductUpdateController(req, res, next) {
        try {
            const product_id = req.params.product_id; 

            const product = await req.db.products.findOne({
                where: {
                    product_id
                },
                raw: true
            });

            if(!product) throw new res.error(400, "Product is not found!");
 
            const data = await ProductCreatValidations(req.body, res.error);
            let photos = req.files.photos;

            if(!Array.isArray(photos)) {
                photos = [req.files?.photos]
            };

            if(!photos) throw new res.error(400, "Files are not found!");
            if(photos?.length > 3) throw new res.error(400, "Files are to many!");
            
            let photoNames = [];

            for(let photo of photos) {
                photoNames.push(photo.md5 + getExtension(photo.name));

                await photo.mv(path.join(__dirname, "..", "public", "files", photo.md5 + getExtension(photo.name)))
            };

            await req.db.products.update({
                ...data,
                product_photo: photoNames
            }, {
                where: {
                   product_id
                }
            })

            res.status(200).json({
                ok: true,
                message: "Updated succesfully!"
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

function getExtension(filename) {
	var i = filename.lastIndexOf(".");
	return i < 0 ? "" : filename.substr(i); 
}
const Joi = require("joi");

module.exports = class ProductValidations {
        static async ProductCreatValidations(data, CustomError) {
                return await Joi.object({
                        product_name: Joi
                                .string()
                                .min(4)
                                .max(64) 
                                .error(new CustomError(400, "Mahsulot nomi noto'g'ri holatda"))
                                .required(),
                        product_price: Joi
                                .number()
                                .integer()
                                .required()
                                .error(new CustomError(400, "Mahsulot narxi noto'g'ri holatda")),
                        product_weight: Joi
                                .string()
                                .required()
                                .error(new CustomError(400, "Mahsulot yuklamasi noto'g'ri holatda")),
                        product_size: Joi
                                .string()
                                .required()
                                .error(new CustomError(400, "Mahsulot o'lchami noto'g'ri holatda")),
                        product_guaranty: Joi
                                .string()
                                .required()
                                .error(new CustomError(400, "Mahsulot kafolati noto'g'ri holatda")),
                        product_capasity: Joi
                                .number()
                                .integer()
                                .required()
                                .error(new CustomError(400, "Mahsulot sig'imi noto'g'ri holatda")),
                        product_sale_price: Joi
                                .string()
                                .error(new CustomError(400, "Mahsulot aksiya narxi noto'g'ri holatda")),
                        product_description: Joi
                                .string()
                                .required()
                                .error(new CustomError(400, "Mahsulot ta'rifi  noto'g'ri holatda")),
                        product_isNew: Joi
                                .boolean()
                                .required()
                                .error(new CustomError(400, "Mahsulot yangiligi  noto'g'ri holatda")),
                        product_status: Joi
                                .boolean()
                                .required()
                                .error(new CustomError(400, "Mahsulot holati noto'g'ri holatda")),
                        category_id: Joi
                                .string()
                                .required()
                                .error(new CustomError(400, "Toifaning IDisi noto'g'ri holatda")),
                }).validateAsync(data);
        }
}
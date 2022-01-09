const Joi = require("joi");

module.exports = class LocationValidations {
  static async OrderPostValidations(data, CustomError) {
    return await Joi.object({
      user_name: Joi.string()
        .min(3)
        .max(64)
        .required()
        .error(new CustomError(400, "Ism noto'g'ri kiritildi!")),
      user_phone: Joi.string()
        .required()
        .regex(/^[+]998([3-9][012345789]|6[125679]|7[01234569])[0-9]{7}$/)
        .error(new CustomError(400, "Telefon raqam noto'g'ri!")),
      order_name: Joi.string()
        .required()
        .error(new CustomError(400, "Mahsulot nomi noto'g'ri!")),
      order_amount: Joi.string()
        .required()
        .error(new CustomError(400, "Mahsulot soni noto'g'ri!")),
      order_contacted: Joi.string()
        .required()
        .valid("active", "inactive")
        .error(new CustomError(400, "Manzil statusi noto'g'ri holatda!")),
    }).validateAsync(data);
  }
};

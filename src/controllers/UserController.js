const { compareCrypt } = require("../modules/bcrypt");
const { createToken } = require("../modules/jsonwebtoken");
const { AdminLoginValidation } = require("../validations/AdminValidation")

module.exports = class UserController {
    static async AdminLoginController(req, res, next) {
        try {
            const data = await AdminLoginValidation(req.body, res.error);

            const admin = await req.db.users.findOne({
                where: {
                    user_login: data.user_login
                },
                raw: true
            })

            if(!admin) throw new res.error(404, "Siz xato login yozdingiz!");

            const isTrue = compareCrypt(
                data.user_password,
                admin.user_password
            )

            if(!isTrue) {
                throw new res.error("Parolingiz xato")
            }

            await req.db.sessions.destroy({
                where: {
                    session_user_agent: req.headers["user-agent"] || "Unknown",
                    user_id: admin.user_id
                }
            })

            const session = await req.db.sessions.create({
                session_user_agent: req.headers["user-agent"] || "Unknown",
                user_id: admin.user_id
            })

            const token = createToken({
                session_id: session.dataValues.session_id
            });

            res.status(201).json({
                ok: true,
                message: "Logged succesfully",
                data: {
                    token
                }
            })

        } catch (error) {
            next(error)
        }
    }
}
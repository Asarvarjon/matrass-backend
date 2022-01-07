const { verifyToken } = require("../modules/jsonwebtoken");

module.exports = async function AuthMiddleware(req, res, next) {
    try {
        const token = req.headers["authorization"];

        if(!token) throw new res.error(401, "Unauthorized");

        const data = await verifyToken(token);

        const session = await req.db.sessions.findOne({
            where: {
                session_id: data.session_id,
            },
            include: {
                model: req.db.users
            },
            raw: true
        })

        console.log(sessios);

        if(!session) throw new res.error(401, "Unauthorized")

        req.session = session;
        next()
    } catch (error) {
        next(error)
    }
}
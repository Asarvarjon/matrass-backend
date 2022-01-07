const { Sequelize } = require("sequelize");
const SessionsModel = require("../../models/SessionsModel");
const UserModel = require("../../models/UserModel");
const init = require("./init");


if(!process.env.PG_URL) {
    throw new Error("POSTGRES URL NOT FOUND")
};


const sequelize = new Sequelize(process.env.PG_URL, {
    logging: false
});

module.exports = async function pg() {
    try {
        await sequelize.authenticate();

        let db = {};

        db.users = await UserModel(sequelize, Sequelize);
        db.sessions = await SessionsModel(sequelize, Sequelize)

        await sequelize.sync({ force: false });

        await init(db)

        return db;
    } catch (error) {
        console.log(`POSTGRES ERROR ${error.message}`);
    }
}
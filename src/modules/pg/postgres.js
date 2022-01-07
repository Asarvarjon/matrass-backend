const { Sequelize } = require("sequelize");
const CustomersModel = require("../../models/CustomersModel");
const Relations = require("../../models/Relations");
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
        db.sessions = await SessionsModel(sequelize, Sequelize);
        db.customers = await CustomersModel(sequelize, Sequelize)

        await Relations(db)
        await sequelize.sync({ force: false });

        await init(db)

        return db;
    } catch (error) {
        console.log(`POSTGRES ERROR ${error.message}`);
    }
}
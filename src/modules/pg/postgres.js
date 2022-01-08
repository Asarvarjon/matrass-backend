const { Sequelize } = require("sequelize");
const CategoriesModel = require("../../models/CategoriesModel");
const CustomersModel = require("../../models/CustomersModel");
const LocationModel = require("../../models/LocationModel");
const ProductsModel = require("../../models/ProductsModel");
const Relations = require("../../models/Relations");
const SessionsModel = require("../../models/SessionsModel");
const TechnologyModel = require("../../models/TechnologyModel");
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
        db.customers = await CustomersModel(sequelize, Sequelize);
        db.categories = await CategoriesModel(sequelize, Sequelize);
        db.technologies = await TechnologyModel(sequelize, Sequelize);
        db.locations = await LocationModel(sequelize, Sequelize);
        db.projects = await ProductsModel(sequelize, Sequelize);

        await Relations(db)
        await sequelize.sync({ force: false });

        await init(db)

        return db;
    } catch (error) {
        console.log(`POSTGRES ERROR ${error.message}`);
    }
}
const { Sequelize } = require("sequelize");


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

        await sequelize.sync({ force: false });
        return db;
    } catch (error) {
        console.log(`POSTGRES ERROR ${error.message}`);
    }
}
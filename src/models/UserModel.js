

module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUID(),
            allowNull: false,
            primaryKey: true
        },
        user_login: {
            type: Sequelize.String(64), 
            allowNull: false
        },
        user_password: {
            type: Sequelize.STRING(200),
            allowNull: false, 
        }
    })
}
module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("orders", {
        order_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUID(),
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: Sequelize.String(64), 
            allowNull: false 
        },
        user_phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_category: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_amount: {
            type: Sequelize.NUMBER,
            allowNull: false,
        }
    })
}
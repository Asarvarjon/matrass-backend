module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("orders", {
        order_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: Sequelize.STRING(64), 
            allowNull: false 
        },
        user_phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_amount: {
            type: Sequelize.NUMBER,
            allowNull: false,
        },
        order_contacted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    })
}
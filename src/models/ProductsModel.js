module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("products", {
        product_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false,
            primaryKey: true
        },
        product_name: {
            type: Sequelize.STRING(64), 
            allowNull: false 
        },
        product_price: {
            type: Sequelize.INTEGER(),
            allowNull: false,
        },
        product_weight: {
            type: Sequelize.FLOAT(),
            allowNull: false,
        },
        product_size: {
            type: Sequelize.STRING(),
            allowNull: false,
        },
        product_guaranty: {
            type: Sequelize.STRING(),
            allowNull: false,
        },
        product_capasity: {
            type: Sequelize.INTEGER(),
            allowNull: false,
        }, 
        product_sale_price: {
            type: Sequelize.FLOAT(),
            allowNull: true,
        }, 
        product_description: {
            type: Sequelize.TEXT(),
            allowNull: false,
        },
        product_isNew: {
            type: Sequelize.BOOLEAN(),
            allowNull: false,
            defaultValue: false
        }, 
        product_status: {
            type: Sequelize.BOOLEAN(),
            allowNull: false,
            defaultValue: true
        },
        product_photo: {
            type: Sequelize.ARRAY(Sequelize.STRING()),
            allowNull: false
        }, 
    })
}
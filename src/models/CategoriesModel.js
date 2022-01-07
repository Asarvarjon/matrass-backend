module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("categories", { 
        category_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false,
            primaryKey: true
        },
        category_name: {
            type: Sequelize.STRING(), 
            allowNull: false 
        }
    })
}
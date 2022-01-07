
module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("customers", {
        customer_id: {
            type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4(),
			primaryKey: true,
        },
        customer_contact_date: {
            type: Sequelize.DATE, 
            allowNull: false
        },
        customer_number: {
            type: Sequelize.STRING(),
            allowNull: false, 
        },
        contacted: {
            type: Sequelize.STRING(),
            defaultValue: false,
            allowNull: false
        }
    })
}
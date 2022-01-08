
module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("locations", {
        location_id: {
            type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4(),
			primaryKey: true,
        }, 
        location_name: {
            type: Sequelize.STRING(),
            allowNull: false, 
        },
        location_link: {
            type: Sequelize.STRING(), 
            allowNull: false
        },
        location_description: {
            type: Sequelize.TEXT(), 
            allowNull: false
        },
        location_photo: {
            type: Sequelize.ARRAY(Sequelize.STRING()),
            allowNull: false
        },
        location_status: {
            type: Sequelize.ENUM("active", "inactive"),
            allowNull: false,
            defaultValue: "active"
        }
    })
}
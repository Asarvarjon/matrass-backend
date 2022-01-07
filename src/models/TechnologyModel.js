module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("technologies", { 
        technology_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false,
            primaryKey: true
        },
        technology_name: {
            type: Sequelize.STRING(), 
            allowNull: false 
        },
        technology_photo_link: {
            type: Sequelize.STRING(), 
            allowNull: false 
        },
        technology_video_link: {
            type: Sequelize.STRING(), 
            allowNull: false 
        },
        technology_description: {
            type: Sequelize.STRING(), 
            allowNull: false 
        },
        technology_status:{
            type: Sequelize.ENUM("active", "inactive"),
            allowNull: false,
            defaultValue: "active"
        }
    })
}
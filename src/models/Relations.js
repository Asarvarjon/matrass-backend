module.exports = async function(db) {
    await db.users.hasMany(db.sessions, {
        foreignKey: {
            name: "user_id",
            allownull: false,
        }
    });

    await db.sessions.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allownull: false
        }
    });

    await db.categories.hasMany(db.products, {
        foreignKey: {
            name: "category_id",
            allownull: false
        }
    })

    await db.products.belongsTo(db.categories, {
        foreignKey: {
            name: "category_id",
            allownull: false
        }
    })
}
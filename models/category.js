module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Menambahkan validasi agar kolom name tidak boleh kosong
        },
        description: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
    });

    Category.associate = function(models) {
        Category.belongsToMany(models.Post, { through: models.PostCategory, foreignKey: 'category_id' });
    };

    return Category;
};

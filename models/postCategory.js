module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Post',
                key: 'id',
            },
            validate: {
                notEmpty: true,
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'id',
            },
            validate: {
                notEmpty: true,
            },
        },
    }, {
        sequelize,
        modelName: 'PostCategory',
        tableName: 'post_categories',
        timestamps: false,
    });

    PostCategory.associate = function(models) {
        PostCategory.belongsTo(models.Post, { foreignKey: 'post_id' });
        PostCategory.belongsTo(models.Category, { foreignKey: 'category_id' });
    };

    return PostCategory;
};

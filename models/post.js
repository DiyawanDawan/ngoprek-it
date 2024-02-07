module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        slug: DataTypes.STRING,
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        image: DataTypes.STRING,
        published_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        is_featured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_draft: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Post',
        tableName: 'posts',
    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, { foreignKey: 'user_id' });
        Post.belongsTo(models.Category, { foreignKey: 'category_id' });
        Post.hasMany(models.Comment, { foreignKey: 'post_id' });
        Post.belongsToMany(models.Tag, { through: models.PostTag, foreignKey: 'post_id' });
    };

    return Post;
};

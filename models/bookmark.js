module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'bookmarks',
    });

    Bookmark.associate = function(models) {
        Bookmark.belongsTo(models.User, { foreignKey: 'user_id' });
        Bookmark.belongsTo(models.Post, { foreignKey: 'post_id' });
    };

    return Bookmark;
};

// models/bookmark.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');
const Post = require('./post');

class Bookmark extends Model {}

Bookmark.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        },
    },
    created_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'bookmark',
    tableName: 'bookmarks',
});

Bookmark.belongsTo(User, { foreignKey: 'user_id' });
Bookmark.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Bookmark;

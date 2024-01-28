// models/like.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');
const Post = require('./post');

class Like extends Model {}

Like.init({
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
    modelName: 'like',
    tableName: 'likes',
});

Like.belongsTo(User, { foreignKey: 'user_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Like;

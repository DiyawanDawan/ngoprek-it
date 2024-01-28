// models/comment.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');
const User = require('./user');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    parent_comment_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    is_approved: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'comment',
    tableName: 'comments',
});

Comment.belongsTo(Post, { foreignKey: 'post_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Comment;

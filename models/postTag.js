// models/postTag.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');
const Tag = require('./tag');

class PostTag extends Model {}

PostTag.init({
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Post,
            key: 'id',
        },
    },
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Tag,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'post_tag',
    tableName: 'post_tags',
    timestamps: false,
});

module.exports = PostTag;

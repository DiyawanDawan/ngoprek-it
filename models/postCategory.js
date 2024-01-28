// models/postCategory.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');
const Category = require('./category');

class PostCategory extends Model {}

PostCategory.init({
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Post,
            key: 'id',
        },
    },
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Category,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'post_category',
    tableName: 'post_categories',
    timestamps: false,
});

module.exports = PostCategory;

// models/category.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');
const PostCategory = require('./postCategory');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'category',
    tableName: 'categories',
});

Category.belongsToMany(Post, { through: PostCategory, foreignKey: 'category_id' });

module.exports = Category;

// models/tag.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');
const PostTag = require('./postTag');

class Tag extends Model {}

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'tag',
    tableName: 'tags',
});

Tag.belongsToMany(Post, { through: PostTag, foreignKey: 'tag_id' });

module.exports = Tag;

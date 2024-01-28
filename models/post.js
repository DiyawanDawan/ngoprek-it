// models/post.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');
const Category = require('./category');
const Comment = require('./comment');
const Tag = require('./tag');
const PostTag = require('./postTag');

class Post extends Model {}

Post.init({
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
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id',
        },
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    published_at: DataTypes.DATE,
    is_featured: DataTypes.BOOLEAN,
    is_draft: DataTypes.BOOLEAN,
    views: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'post',
    tableName: 'posts',
});

Post.belongsTo(User, { foreignKey: 'user_id' });
Post.belongsTo(Category, { foreignKey: 'category_id' });
Post.hasMany(Comment, { foreignKey: 'post_id' });
Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'post_id' });

module.exports = Post;

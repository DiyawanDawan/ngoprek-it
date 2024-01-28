// models/popular.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');

class Popular extends Model {}

Popular.init({
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
    views: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'popular',
    tableName: 'populars',
});

Popular.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Popular;

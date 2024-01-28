// models/view.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');

class View extends Model {}

View.init({
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
    created_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'view',
    tableName: 'views',
});

View.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = View;

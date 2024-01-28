// models/subscriber.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');

class Subscriber extends Model {}

Subscriber.init({
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
    created_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'subscriber',
    tableName: 'subscribers',
});

Subscriber.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Subscriber;

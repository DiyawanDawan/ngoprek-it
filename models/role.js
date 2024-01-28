const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Role extends Model {}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'role', // Nama model disesuaikan dengan konvensi Sequelize
    tableName: 'roles', // Nama tabel disesuaikan dengan konvensi Sequelize
});

module.exports = Role;

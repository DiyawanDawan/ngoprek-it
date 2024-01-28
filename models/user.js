const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Role = require('./role'); // Import model Role

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Role, // Menggunakan model Role sebagai model yang dirujuk
            key: 'id',
        },
    },
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT,
    website: DataTypes.STRING,
    is_private: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'User', // Nama model disesuaikan dengan konvensi Sequelize
    tableName: 'users', // Nama tabel disesuaikan dengan konvensi Sequelize
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;

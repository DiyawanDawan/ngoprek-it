module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Role', // Nama model disesuaikan dengan konvensi Sequelize
        tableName: 'roles', // Nama tabel disesuaikan dengan konvensi Sequelize
    });
    return Role;
};

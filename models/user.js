module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
            allowNull: false,
            references: {
                model: 'Role', // Ubah referensi model menjadi string 'Role'
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
        modelName: 'User',
        tableName: 'users',
    });

    User.associate = function(models) {
        User.belongsTo(models.Role, { foreignKey: 'role_id' }); // Mendefinisikan relasi di dalam fungsi associate
    };

    return User;
};

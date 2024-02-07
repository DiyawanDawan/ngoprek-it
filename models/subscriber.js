module.exports = (sequelize, DataTypes) => {
    const Subscriber = sequelize.define('Subscriber', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', // Merujuk ke model 'User' menggunakan string
                key: 'id',
            },
        },
        created_at: DataTypes.DATE,
    }, {
        modelName: 'Subscriber',
        tableName: 'subscribers',
    });

    Subscriber.associate = function(models) {
        Subscriber.belongsTo(models.User, { foreignKey: 'user_id' }); // Mendefinisikan relasi di dalam fungsi associate
    };

    return Subscriber;
};

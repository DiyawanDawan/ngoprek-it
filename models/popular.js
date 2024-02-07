module.exports = (sequelize, DataTypes) => {
    const Popular = sequelize.define('Popular', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Post', // Ubah referensi model menjadi string 'Post'
                key: 'id',
            },
        },
        views: DataTypes.INTEGER,
        likes: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Popular',
        tableName: 'populars',
    });

    Popular.associate = function(models) {
        Popular.belongsTo(models.Post, { foreignKey: 'post_id' });
    };

    return Popular;
};

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        modelName: 'Tag',
        tableName: 'tags',
    });

    Tag.associate = function(models) {
        Tag.belongsToMany(models.Post, { through: models.PostTag, foreignKey: 'tag_id' }); // Mendefinisikan relasi di dalam fungsi associate
    };

    return Tag;
};

module.exports = (sequelize, DataTypes) => {
    const PostTag = sequelize.define('PostTag', {
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tag',
                key: 'id',
            },
        },
    }, {
        modelName: 'PostTag',
        tableName: 'post_tags',
        timestamps: false,
    });

    PostTag.associate = function(models) {
        PostTag.belongsTo(models.Post, { foreignKey: 'post_id' });
        PostTag.belongsTo(models.Tag, { foreignKey: 'tag_id' });
    };

    return PostTag;
};

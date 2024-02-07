const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Post = require('./post');

module.exports = (sequelize, DataTypes) => {
    const View = sequelize.define('View', {
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
        created_at: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'View',
        tableName: 'views',
    });

    View.associate = function(models) {
        View.belongsTo(models.Post, { foreignKey: 'post_id' });
    };

    return View;
};

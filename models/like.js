module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Menambahkan validasi agar kolom user_id tidak boleh kosong
            references: {
                model: 'User',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Menambahkan validasi agar kolom post_id tidak boleh kosong
            references: {
                model: 'Post',
                key: 'id',
            },
        },
        created_at: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Like',
        tableName: 'likes',
    });

    return Like;
};

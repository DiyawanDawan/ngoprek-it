module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        parent_comment_id: DataTypes.INTEGER,
        content: {
            type: DataTypes.TEXT,
            allowNull: false, // Menambahkan validasi agar kolom content tidak boleh kosong
        },
        is_approved: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Comment',
        tableName: 'comments',
    });

    return Comment;
};

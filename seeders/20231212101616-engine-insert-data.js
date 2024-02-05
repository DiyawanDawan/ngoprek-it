const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

module.exports = {
    async up(queryInterface, Sequelize) {
        // Insert data contoh peran ke dalam tabel roles
        await queryInterface.bulkInsert("roles", [
            {
                id: nanoid(), // Generate unique ID for the role
                name: "Admin",
                description: "Administrator role",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: nanoid(),
                name: "User",
                description: "Regular user role",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        // Ambil role "User" dan "Admin" dari database
        const userRole = await queryInterface.rawSelect('roles', {
            where: { name: 'User' },
        });
        const adminRole = await queryInterface.rawSelect('roles', {
            where: { name: 'Admin' },
        });

        // Insert data contoh pengguna ke dalam tabel users
        await queryInterface.bulkInsert("users", [
            {
                username: "admin",
                email: "admin@example.com",
                password: await hashPassword("adminpassword"),
                role_id: adminRole ? adminRole.id : null, // Menggunakan ID role "Admin"
                avatar: "admin_avatar.png",
                bio: "I am an admin user",
                website: "https://admin.example.com",
                is_private: false,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                username: "user1",
                email: "user1@example.com",
                password: await hashPassword("user1password"),
                role_id: userRole ? userRole.id : null, // Menggunakan ID role "User"
                avatar: "user1_avatar.png",
                bio: "I am a regular user",
                website: "https://user1.example.com",
                is_private: true,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        // Hapus semua data contoh peran dari tabel roles saat rollback migrasi
        await queryInterface.bulkDelete("roles", null, {});

        // Hapus semua data contoh pengguna dari tabel users saat rollback migrasi
        await queryInterface.bulkDelete("users", null, {});
    }
};

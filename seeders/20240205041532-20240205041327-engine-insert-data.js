// Seed untuk menyisipkan data contoh like ke dalam tabel likes

'use strict';
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Menyisipkan data contoh peran ke dalam tabel roles
    await queryInterface.bulkInsert("roles", [
      {
        id: nanoid(),
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

    const userRoleId = await queryInterface.rawSelect('roles', {
      where: { name: 'User' },
    }, ['id']);
    console.log("User Role ID:", userRoleId);
    const adminRoleId = await queryInterface.rawSelect('roles', {
      where: { name: 'Admin' },
    }, ['id']);
    console.log("Admin Role ID:", adminRoleId);

    // Insert data contoh pengguna ke dalam tabel users
    await queryInterface.bulkInsert("users", [
      {
        username: "admin",
        email: "admin@example.com",
        password: await hashPassword("adminpassword"),
        role_id: adminRoleId, // Menggunakan ID role "Admin"
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
        role_id: userRoleId, // Menggunakan ID role "User"
        avatar: "user1_avatar.png",
        bio: "I am a regular user",
        website: "https://user1.example.com",
        is_private: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("categories", [
      {
        id: nanoid(),
        name: "Technology",
        description: "Articles related to technology topics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(),
        name: "Travel",
        description: "Articles related to travel experiences",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan kategori lainnya di sini sesuai kebutuhan
    ]);

    // Memperoleh ID kategori
    const technologyCategoryId = await queryInterface.rawSelect('categories', {
      where: { name: 'Technology' },
    }, ['id']);

    // Memperoleh ID pengguna (user)
    const userAdmin = await queryInterface.rawSelect('users', {
      where: { username: 'admin' }, // Ganti dengan username yang sesuai
    }, ['id']);

    // Menyisipkan data contoh post ke dalam tabel posts
    await queryInterface.bulkInsert("posts", [
      {
        id: nanoid(),
        user_id: userAdmin, // Gunakan ID pengguna yang valid
        category_id: technologyCategoryId, // Gunakan ID kategori yang valid
        title: "Sample Technology Post 1",
        slug: "sample-technology-post-1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "technology_image_1.png",
        published_at: new Date(),
        is_featured: true,
        is_draft: false,
        views: 100,
        likes: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(),
        user_id: userAdmin, // Gunakan ID pengguna yang valid
        category_id: technologyCategoryId, // Gunakan ID kategori yang valid
        title: "Sample Technology Post 2",
        slug: "sample-technology-post-2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "technology_image_2.png",
        published_at: new Date(),
        is_featured: true,
        is_draft: false,
        views: 150,
        likes: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(),
        user_id: userAdmin, // Gunakan ID pengguna yang valid
        category_id: technologyCategoryId, // Gunakan ID kategori yang valid
        title: "Sample Technology Post 3",
        slug: "sample-technology-post-3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "technology_image_3.png",
        published_at: new Date(),
        is_featured: true,
        is_draft: false,
        views: 200,
        likes: 90,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // Memperoleh ID post
    const posts = await queryInterface.rawSelect('posts', {
      where: { title: 'Sample Technology Post 1' }, // Ganti dengan judul post yang sesuai
    }, ['id']);
    // Memperoleh ID pengguna (user)
    const user = await queryInterface.rawSelect('users', {
      where: { username: 'user1' }, // Ganti dengan username yang sesuai
    }, ['id']);

    // Menyisipkan data contoh like ke dalam tabel likes
    await queryInterface.bulkInsert("likes", [
      {
        id: nanoid(),
        user_id: user, // Gunakan ID pengguna yang valid
        post_id: posts, // Gunakan ID post yang valid dari entri posts yang sudah ada
        created_at: new Date(),
      },
      {
        id: nanoid(),
        user_id: user, // Gunakan ID pengguna yang valid
        post_id: posts, // Gunakan ID post yang valid dari entri posts yang sudah ada
        created_at: new Date(),
      },
    ]);

    // Memperoleh ID post paling populer berdasarkan jumlah views
    const popularPostId = await queryInterface.rawSelect('posts', {
      order: [['views', 'DESC']], // Mengurutkan berdasarkan views secara descending
      limit: 3, // Mengambil hanya satu post paling populer
    }, ['id']);

    // Menyisipkan data contoh popular berdasarkan post paling populer
    await queryInterface.bulkInsert("populars", [
      {
        id: nanoid(),
        post_id: popularPostId, // Gunakan ID post paling populer
        views: 200,
        likes: 90,
      },
    ]);
    await queryInterface.bulkInsert("comments", [
      {
        id: nanoid(),
        post_id: posts, // Gunakan ID post yang sesuai
        user_id: user, // Gunakan ID pengguna yang valid
        parent_comment_id: null, // Tidak ada parent comment untuk komentar ini
        content: "This is the first comment.",
        is_approved: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(),
        post_id: posts, // Gunakan ID post yang sesuai
        user_id: user, // Gunakan ID pengguna yang valid
        parent_comment_id: null, // Tidak ada parent comment untuk komentar ini
        content: "This is the second comment.",
        is_approved: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    // Menyisipkan data contoh subscribe ke dalam tabel subscribers
    await queryInterface.bulkInsert("subscribers", [
      {
        id: nanoid(),
        user_id: user, // Gunakan ID pengguna yang valid
        created_at: new Date(),
      },
    ]);
    // Seed data tag
    await queryInterface.bulkInsert("tags", [
      {
        name: "Technology",
        slug: "technology",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Information",
        slug: "information",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Informatics",
        slug: "informatics",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    // Seed data view
    await queryInterface.bulkInsert("views", [
      {
        post_id: posts, // ID post yang valid dari entri posts yang sudah ada
        created_at: new Date(),
      },
    ]);
    // Menyisipkan data contoh post ke dalam tabel post_categories
    await queryInterface.bulkInsert("post_categories", [
      {
        post_id: posts, // Ganti dengan ID post yang sesuai
        category_id: technologyCategoryId, // Ganti dengan ID kategori yang sesuai
      },
    ])

    // Menyisipkan data contoh bookmark ke dalam tabel bookmarks
    await queryInterface.bulkInsert("bookmarks", [
      {
        id: nanoid(),
        user_id: user, // Gunakan ID pengguna yang valid
        post_id: posts, // Gunakan ID post yang valid
        created_at: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    // Hapus semua data contoh peran dari tabel roles saat rollback migrasi
    await queryInterface.bulkDelete("roles", null, {});

    // Hapus semua data contoh pengguna dari tabel users saat rollback migrasi
    await queryInterface.bulkDelete("users", null, {});

    await queryInterface.bulkDelete("categories", null, {});

    // Hapus semua data contoh post dari tabel posts saat rollback migrasi
    await queryInterface.bulkDelete("posts", null, {});

    // Hapus semua data contoh like dari tabel likes saat rollback migrasi
    await queryInterface.bulkDelete("likes", null, {});

    // Hapus semua data contoh popular dari tabel populars saat rollback migrasi
    await queryInterface.bulkDelete("populars", null, {});

    // Hapus semua data contoh komentar dari tabel comments saat rollback migrasi
    await queryInterface.bulkDelete("comments", null, {});

    // Hapus semua data contoh subscribe dari tabel subscribers saat rollback migrasi
    await queryInterface.bulkDelete("subscribers", null, {});

    // Hapus semua data contoh bookmark dari tabel bookmarks saat rollback migrasi
    await queryInterface.bulkDelete("bookmarks", null, {});

    // Hapus semua data contoh subscribe dari tabel subscribers saat rollback migrasi
    await queryInterface.bulkDelete("tags", null, {});
    // Hapus semua data contoh subscribe dari tabel subscribers saat rollback migrasi
    await queryInterface.bulkDelete("views", null, {});

    // Hapus semua data contoh dari tabel post_categories saat rollback migrasi
    await queryInterface.bulkDelete("post_categories", null, {});
  }
};

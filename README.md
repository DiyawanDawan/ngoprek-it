# Blogs Api

Kode Default Kolabuarsi bersama Tim Capstone Project


Cara melakukan migrasi DB
1. buat file .env di root project dan buat juga nama databsenya di mysql

2. Pastikan username, password, host, name di .env sudah sesuai dengan databse masing 

Contoh

    DB_USERNAME = root
    DB_PASSWORD =
    DB_HOSTNAME = 127.0.0.1
    DB_NAME = db_donordarah
    DB_DIALECT = mysql

    JWT_SECRET=kunci_rahasia_anda


3. Perintah Untuk Migrasi database

        npx sequelize db:migrate

4. Untuk melakukan seender atau insert query di databse

       npx sequelize db:seed --seed 20240205041532-20240205041327-engine-insert-data.js

4. Cara melakukan seed pada tabel keseluruhanya perintah ini di jalankan ketika perintah sebelumnya belum di jalankan


    npx sequelize db:seed:all


## Hemo Life API
Untuk User Endpoint, berikut adalah path lengkapnya:

1. **User List Endpoint**:
   - URL: `/api/users`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua pengguna.

2. **Create User Endpoint**:
   - URL: `/api/users`
   - Method: `POST`
   - Deskripsi: Membuat pengguna baru.

3. **Update User Endpoint**:
   - URL: `/api/users/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi pengguna berdasarkan ID pengguna.

4. **Delete User Endpoint**:
   - URL: `/api/users/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus pengguna berdasarkan ID pengguna.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/users`
- POST: `/api/users`
- PUT: `/api/users/:id`
- DELETE: `/api/users/:id`

Untuk Role Endpoint, berikut adalah path lengkapnya:

1. **Role List Endpoint**:
   - URL: `/api/roles`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua peran.

2. **Create Role Endpoint**:
   - URL: `/api/roles`
   - Method: `POST`
   - Deskripsi: Membuat peran baru.

3. **Update Role Endpoint**:
   - URL: `/api/roles/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi peran berdasarkan ID peran.

4. **Delete Role Endpoint**:
   - URL: `/api/roles/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus peran berdasarkan ID peran.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/roles`
- POST: `/api/roles`
- PUT: `/api/roles/:id`
- DELETE: `/api/roles/:id`

Berikut adalah path lengkap untuk setiap metode di Post Endpoint:

1. **Post List Endpoint**:
   - URL: `/api/posts`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua postingan.

2. **Create Post Endpoint**:
   - URL: `/api/posts`
   - Method: `POST`
   - Deskripsi: Membuat postingan baru.

3. **Update Post Endpoint**:
   - URL: `/api/posts/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi postingan berdasarkan ID postingan.

4. **Delete Post Endpoint**:
   - URL: `/api/posts/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus postingan berdasarkan ID postingan.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/posts`
- POST: `/api/posts`
- PUT: `/api/posts/:id`
- DELETE: `/api/posts/:id`


Berikut adalah path lengkap untuk setiap metode di Category Endpoint:

1. **Category List Endpoint**:
   - URL: `/api/categories`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua kategori.

2. **Create Category Endpoint**:
   - URL: `/api/categories`
   - Method: `POST`
   - Deskripsi: Membuat kategori baru.

3. **Update Category Endpoint**:
   - URL: `/api/categories/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi kategori berdasarkan ID kategori.

4. **Delete Category Endpoint**:
   - URL: `/api/categories/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus kategori berdasarkan ID kategori.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/categories`
- POST: `/api/categories`
- PUT: `/api/categories/:id`
- DELETE: `/api/categories/:id`

Berikut adalah path lengkap untuk setiap metode di Tag Endpoint:

1. **Tag List Endpoint**:
   - URL: `/api/tags`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua tag.

2. **Create Tag Endpoint**:
   - URL: `/api/tags`
   - Method: `POST`
   - Deskripsi: Membuat tag baru.

3. **Update Tag Endpoint**:
   - URL: `/api/tags/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi tag berdasarkan ID tag.

4. **Delete Tag Endpoint**:
   - URL: `/api/tags/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus tag berdasarkan ID tag.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/tags`
- POST: `/api/tags`
- PUT: `/api/tags/:id`
- DELETE: `/api/tags/:id`



Berikut adalah path lengkap untuk setiap metode di Comment Endpoint:

1. **Comment List Endpoint**:
   - URL: `/api/comments`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua komentar.

2. **Create Comment Endpoint**:
   - URL: `/api/comments`
   - Method: `POST`
   - Deskripsi: Membuat komentar baru.

3. **Update Comment Endpoint**:
   - URL: `/api/comments/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi komentar berdasarkan ID komentar.

4. **Delete Comment Endpoint**:
   - URL: `/api/comments/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus komentar berdasarkan ID komentar.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/comments`
- POST: `/api/comments`
- PUT: `/api/comments/:id`
- DELETE: `/api/comments/:id`

Berikut adalah path lengkap untuk setiap metode di Subscriber Endpoint:

1. **Subscriber List Endpoint**:
   - URL: `/api/subscribers`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua pelanggan (subscribers).

2. **Create Subscriber Endpoint**:
   - URL: `/api/subscribers`
   - Method: `POST`
   - Deskripsi: Membuat pelanggan (subscriber) baru.

3. **Update Subscriber Endpoint**:
   - URL: `/api/subscribers/:id`
   - Method: `PUT`
   - Deskripsi: Memperbarui informasi pelanggan (subscriber) berdasarkan ID pelanggan.

4. **Delete Subscriber Endpoint**:
   - URL: `/api/subscribers/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus pelanggan (subscriber) berdasarkan ID pelanggan.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/subscribers`
- POST: `/api/subscribers`
- PUT: `/api/subscribers/:id`
- DELETE: `/api/subscribers/:id`


Berikut adalah path lengkap untuk setiap metode di Bookmark Endpoint:

1. **Bookmark List Endpoint**:
   - URL: `/api/bookmarks`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua bookmark.

2. **Create Bookmark Endpoint**:
   - URL: `/api/bookmarks`
   - Method: `POST`
   - Deskripsi: Membuat bookmark baru.

3. **Delete Bookmark Endpoint**:
   - URL: `/api/bookmarks/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus bookmark berdasarkan ID bookmark.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/bookmarks`
- POST: `/api/bookmarks`
- DELETE: `/api/bookmarks/:id`


Berikut adalah path lengkap untuk setiap metode di Like Endpoint:

1. **Like List Endpoint**:
   - URL: `/api/likes`
   - Method: `GET`
   - Deskripsi: Mengambil daftar semua like.

2. **Create Like Endpoint**:
   - URL: `/api/likes`
   - Method: `POST`
   - Deskripsi: Membuat like baru.

3. **Delete Like Endpoint**:
   - URL: `/api/likes/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus like berdasarkan ID like.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/likes`
- POST: `/api/likes`
- DELETE: `/api/likes/:id`


Berikut adalah path lengkap untuk setiap metode di View Endpoint:

1. **View List Endpoint**:
   - URL: `/api/views`
   - Method: `GET`
   - Deskripsi: Mendapatkan daftar semua views.

2. **Create View Endpoint**:
   - URL: `/api/views`
   - Method: `POST`
   - Deskripsi: Membuat view baru.

3. **Delete View Endpoint**:
   - URL: `/api/views/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus view berdasarkan ID view.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/views`
- POST: `/api/views`
- DELETE: `/api/views/:id`


Berikut adalah path lengkap untuk setiap metode di Post Category Endpoint:

1. **Post Category List Endpoint**:
   - URL: `/api/post-categories`
   - Method: `GET`
   - Deskripsi: Mendapatkan daftar semua kategori postingan.

2. **Create Post Category Endpoint**:
   - URL: `/api/post-categories`
   - Method: `POST`
   - Deskripsi: Membuat kategori postingan baru.

3. **Delete Post Category Endpoint**:
   - URL: `/api/post-categories/:id`
   - Method: `DELETE`
   - Deskripsi: Menghapus kategori postingan berdasarkan ID kategori.

Jadi, path lengkap untuk setiap metode adalah sebagai berikut:
- GET: `/api/post-categories`
- POST: `/api/post-categories`
- DELETE: `/api/post-categories/:id`

Untuk Popular Endpoint:

- **Popular List Endpoint**:
   - URL: `/api/popular`
   - Method: `GET`
   - Deskripsi: Mendapatkan data yang populer, seperti postingan, tag, atau kategori populer.


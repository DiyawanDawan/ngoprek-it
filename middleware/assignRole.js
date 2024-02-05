// Model User dan Role
const User = require('../models/role');
const Role = require('../models/role');

// Middleware untuk mengatur peran pengguna
async function assignRole(req, res, next) {
    try {
        // Ambil informasi pengguna dari token atau sesi
        const userId = req.user.id; // Misalnya, pengguna telah diverifikasi melalui middleware autentikasi

        // Temukan atau tetapkan peran pengguna
        let user = await User.findByPk(userId);
        let role = await Role.findOne({ where: { name: 'Admin' } }); // Temukan peran "Admin" dalam contoh ini

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }

        // Tetapkan peran ke pengguna
        user.role_id = role.id;
        await user.save();

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { assignRole };

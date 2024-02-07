const express = require("express");
const router = express.Router();

const {
    getAllBloodBank,
    // getBloodBankByPmiId,
    // updateBloodBankByPmiId,
    // getAllBloodDonors,
    // adminProfile,
    // updateAdminProfile,
    // postJadwalDonorDarahPMI,
    // addBlogPosts
} = require("../controllers/userControler");
// const { authenticateToken } = require("../middleware/middleware");

router.get("/dashboardUser", getAllBloodBank);
module.exports = router;

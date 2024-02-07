// const { format } = require('date-fns');
const { nanoid } = require("nanoid");

const { BankDarah, GolDarah, LokasiPmi, TraDonor, Jadwal, User, Blogs, Admin } = require("../models");

const Validator = require("fastest-validator");

const v = new Validator();

const getDasboardAdmin = async (req, res) => {
    res.send('Welcome Admin')
};

module.exports = {
    getDasboardAdmin
};

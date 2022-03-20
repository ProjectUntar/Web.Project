const express = require("express");
const router = express.Router();
const schema = require('../models/schema')
const User = require("../models/User")

const { ensureAuthenticated } = require("../config/auth");


router.post('/post', ensureAuthenticated , async (req, res) => {
    const nama = req.body.nama;
    const gambar = req.body.gambar;
    const des_pdk = req.body.des_pdk;
    const des_pjg = req.body.des_pjg;
    const section = req.body.section;

    const baru = new schema({
        nama: nama,
        gambar: gambar,
        des_pdk: des_pdk,
        des_pjg: des_pjg,
        section: section      
    });
     await baru.save()
     req.flash("success_msg", "Anda berhasil Mem-Posting");
     res.render("terimakasih");
})
module.exports = router;
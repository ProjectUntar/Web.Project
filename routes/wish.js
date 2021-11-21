const express = require('express')
const Wish = require('../models/wish')
const router = express.Router();

router.get('/', async(req, res) => {
    if (!req.session.wish) {
        return res.render('pages/Wishlist', { products: 0});
    }
    var wish = new Wish(req.session.wish);
    console.log(wish.generateArray());
    res.render('pages/Wishlist', { products: wish.add });
})

module.exports = router;
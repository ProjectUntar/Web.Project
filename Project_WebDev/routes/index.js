const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/index');
});
router.get('/destination',(req,res)=>{
    res.render('pages/destination');
});
router.get('/cuisine',(req,res)=>{
    res.render('pages/cuisine');
});
router.get('/entertainment',(req,res)=>{
    res.render('pages/entertainment');
});
router.get('/lodging',(req,res)=>{
    res.render('pages/lodging');
});


module.exports = router;
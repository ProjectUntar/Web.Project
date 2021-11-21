const express = require("express");
const router = express.Router();
const Forum = require('../models/schema')
const Way = require("../models/wish")


const { ensureAuthenticated } = require("../config/auth");


router.get('/',(req,res)=>{
  res.render('index');
});
router.get('/destination',async (req,res)=>{
  var data = await Forum.where("section",/destination/)
  console.log(data);
  res.render('pages/destination',{Desti: data});
});
router.get('/cuisine',async(req,res)=>{
  var data = await Forum.where("section",/cuisine/)
  console.log(data);
  res.render('pages/cuisine',{Cui: data});
});
router.get('/entertainment',async(req,res)=>{
  var data = await Forum.where("section",/entertainment/)
  console.log(data);
  res.render('pages/entertainment',{Enter: data});
});
router.get('/lodging',async(req,res)=>{
  var data = await Forum.where("section",/lodging/)
  console.log(data);
  res.render('pages/lodging',{Lod: data});
});
router.get("/login", (req, res) => res.render("login")
);

router.get("/register", (req, res) => res.render("register")
);

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
  })
);
router.get("/halaman/:id",(req,res)=>{
  const halamanId = req.params.id;
  const wish = new Wish(req.session.wish ? req.session.wish : {});
  Forum.findById(halamanId, function(err, hal) {
    wish.add(hal, hal.id);
    req.session.wish = wish;
  });
}); 
module.exports = router;
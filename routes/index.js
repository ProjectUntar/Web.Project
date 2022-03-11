const express = require("express");
const router = express.Router();
const Forum = require('../models/schema')
const Comment = require("../models/Comment")


const { ensureAuthenticated } = require("../config/auth");


router.get('/',(req,res)=>{
  res.render('index');
});
router.get('/destination',async (req,res)=>{
  var data = await Forum.where("section",/destination/)
  res.render('pages/destination',{Desti: data});
});
router.get('/cuisine',async(req,res)=>{
  var data = await Forum.where("section",/cuisine/)
  res.render('pages/cuisine',{Cui: data});
});
router.get('/entertainment',async(req,res)=>{
  var data = await Forum.where("section",/entertainment/)
  res.render('pages/entertainment',{Enter: data});
});
router.get('/lodging',async(req,res)=>{
  var data = await Forum.where("section",/lodging/)
  res.render('pages/lodging',{Lod: data});
});
router.get("/login", (req, res) => res.render("login")
);

router.get("/post", (req, res) => res.render("post")
);

router.get("/register", (req, res) => res.render("register")
);

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
  })
);
router.get("/halaman/:id/:nama", async (req,res)=>{
  const halamanId = req.params.id;
  const nama= req.params.nama;
  var data = await Forum.where("_id", halamanId) 
  var test = await Comment.where("page", nama)
    res.render('forum',{
      Hal: data,
      Com: test
    });
  
});
  
 
module.exports = router;
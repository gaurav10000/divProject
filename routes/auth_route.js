const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const passport=require('passport');

const User=require('../Models/User');
// const Product=require('../Models/Product');

router.get('/register',(req,res)=>{
    res.render('auth/signup')
})

router.get('/login',(req,res)=>{
    res.render('auth/login',{ username: "", password: "" })
})

router.post('/register',async(req,res)=>{
    const {email,username,password}=req.body;
    const user=new User({username,email});
    const newuser=await User.register(user,password);
    req.login(newuser, function(err) {
         
        return res.redirect('/');
    });
    
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login'}),  
  
  (req,res)=>{
    res.redirect('/');
  }
);

router.get('/logout', (req,res)=>{
    req.logout(function(err) {
        res.redirect('/login');
    });
    
});

module.exports=router;

const express=require('express');
const app=express();
const dotenv = require('dotenv');
const path=require('path');
const mongoose=require('mongoose');
const product_route=require('./routes/product_route')
const auth_route=require('./routes/auth_route')
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const session=require('express-session');
const googleai = require('@google/generative-ai');
const passport=require('passport');
const LocalStrategy=require('passport-local');

const  User=require('./Models/User');

dotenv.config();

//mongodb+srv://divyanshur0603:divy@cluster0.urrt5xq.mongodb.net/Tourist-database
mongoose.connect('mongodb+srv://divyanshur0603:divy@cluster0.urrt5xq.mongodb.net/Tourist-database')
    .then(()=>{
        console.log('db connected successfully');
    })
    .catch((err)=>{
        console.error(err);
        console.log('something went wrong')
    })
    
app.use(express.urlencoded({extended:true}, { strict: false }));
app.use(methodOverride('_method'))
app.set('view engine','ejs');
app.engine('ejs',ejsMate);
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,   
        expires:Date.now()+1000*60*60*24*7*1,
        maxAge:1000*60*60*24*7*1 
    }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate()))
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})
app.use(product_route);
app.use(auth_route);
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

// seed();
app.listen(5000,()=>{
    console.log(`server started at port 5000`);
})
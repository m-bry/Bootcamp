//
// DEPENDECIES
//
const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalStrategy = require(`passport-local`);
const passportLocalMongoose = require('passport-local-mongoose');

const UserModel = require(`./models/user`);

const conn = require('./connect');
let {url, authInfo, options } = conn;
mongoose.connect(url, authInfo, options)
.then(()=>{
    console.log(`Connected to MongoDB`)
})
.catch(err => console.log(`Error connecting to MongoDB: ${err}`));


//
//MIDDLEWARES
//
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('express-session')({
    secret: 'blas blas', //used to decrpyt session on the server
    resave: false, // dont save the session if there are no changes
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
const isLoggedIn = (req, res, next) =>{
    if (req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/login')
    }
}

//
//ROUTES
//
app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.get('/newsfeed', isLoggedIn, (req, res)=>{
    res.render(`newsfeed.ejs`);
    console.log(req.user);
});

app.get('/signup', (req, res)=>{
    res.render(`signup.ejs`)
});

app.post('/signup', (req, res)=>{
    let newUser = new UserModel({username: req.body.username})
    UserModel.register(newUser, req.body.password, (err, user)=>{
        if (err){
            console.log(err)
            //send user back to sign up if error occurs
            res.render(`signup.ejs`);
        } else {
            passport.authenticate('local')(req, res, function(){
                res.redirect(`/newsfeed`);
            })
        }
    })
});

app.get(`/login`, (req, res)=>{
    res.render('login.ejs')
});

// app.post('/login',
//     //authenticate user
//     passport.authenticate('local', {
//         failureRedirect: '/login',
//         failureMessage: false
//     }), (req, res) =>{
//         res.redirect('/newsfeed')
//     });

app.post('/login',
    //authenticate user
    passport.authenticate('local', {
        successRedirect: '/newsfeed',
        failureRedirect: '/login',
    }));

app.get('/logout', (req, res)=>{
    req.logout(
        ()=>{
            null
        })
    res.redirect('/')
});

app.listen(PORT, ()=>{console.log(`connected to server on port ${PORT}`)});
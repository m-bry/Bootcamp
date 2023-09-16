const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req, res)=>{
    res.render('home.ejs');
});

app.get('/contact', (req, res)=>{
    res.render('contact.ejs');

});

app.get('/about', (req, res)=>{
    res.render('about.ejs');
});

app.get('/doggyhorse', (req, res)=>{
    // let fname = req.query.fname;
    // let kittyCat = req.query.kittyCat;

    //destructuring
    let {lName, fName} = req.query;
    let result = `${fName} ${lName}`;
    res.send(result);
})

app.listen(port, ()=> console.log(`partialDemo running on port ${port}`));
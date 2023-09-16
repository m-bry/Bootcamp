const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//import morgan for logging purposes
const logger = require('morgan');

//pass in a string for the type of data we want
app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req, res)=>{
    let cat = 'woof';
    //can take two args
    // 1st arg = file to be rendered
    //2nd ard = onject containing data
    res.render('home.ejs', {dog: cat});
});

app.get('/about', (req, res)=>{
    let monster = {
        name: 'Dracula',
        type: 'Vampire',
    };
    res.render('about.ejs', {person: monster});
});

app.get('/contact', (req,res) => {
    let people = ['Mikey', 'Amir', 'Sam'];
    res.render('contact.ejs', {doggy: people});
})

app.get('/cartoon', (req, res)=>{
    res.render('cartoon.ejs', {people})
})

const people = [
    { fname: "George", lname: "Of the Jungle" },
    { fname: "Shep", lname: "the Elephant" },
  ];

app.get('/money/:something', (req,res)=>{
    let amount = req.params.something;
    res.render('money.ejs', {doggy: amount})
})

app.listen(port, () => console.log(`EJS demo on port ${port}`));
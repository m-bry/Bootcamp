// allows access to env file & parses the variables
require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=>{
    res.render('home.ejs');
});

const baseUrl = 'https://api.themoviedb.org/3';
const api_key = '5929018064c303c8fb66d30f8c5d37cc';


app.get('/nowplaying', (req, res)=>{
    let route = `movie/now_playing?language=en-US&page=1api_key=${api_key}`;
    let endpoint = `${baseUrl}/${route}`;

    fetch(endpoint)
    .then(response => {
        return response.json()
    })
    .then(data => {
        res.render('results.ejs', {data: data.results})
    })
    .catch(err => {
        console.log('Error from now playing fetch', err)
    });

});

app.get('/about', (req, res)=>{
    res.render('about.ejs');
});

app.get('/contact', (req, res)=>{
    res.render('contact.ejs');
});

// console.log(process);

// No clue what this does, figure it out.
// console.log(process.env.TMDB_API_API_KEY);

// Now Playing
// endpoint = baseURL + route
// endpoint = https://api.themoviedb.org/3  + moive/now_playing?language=en-US&page=1

// Search by movie
// endpoint = https://api.themoviedb.org/3 + search/movie/?include_ad&language=en-US&page=1&api_key=<api_key>&query=<movie title>

app.listen(port, ()=> console.log(`EJSMovieAPI running on port ${port}`));
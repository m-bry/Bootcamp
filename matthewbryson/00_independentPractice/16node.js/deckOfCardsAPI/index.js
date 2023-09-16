
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(express.static('public'));

const {valueConvertor, dealCards, cardSort} = require('./helper');

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.redirect('/home');
});


// https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
const baseUrl = 'https://www.deckofcardsapi.com/api/deck';

app.get('/home', (req, res) => {
    //we want to get one deck from the API
    let route = 'new/shuffle/?deck_count=1';
    let endpoint = `${baseUrl}/${route}`;

    //http request
    fetch(endpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(`Dang 'ol endpoint in route handler 1 broke man`);
            }
        })
        .then(parsedData =>{
            //what we want is the deck id
            console.log(`${parsedData.deck_id}`);
        })
        .catch(err => {
            console.log(`Dang 'ol API Error: ${err}`);
            res.render('error.ejs');
        })


    res.render('home.ejs');
});


app.get('/home', (req, res) => {
    //we need the deck id to draw cards
    let route = `${req.card_is}/draw/?count=10`;
    let endpoint = `${baseUrl}/${route}`;

    //http request
    fetch(CardData)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(`Dang 'ol endpoint in route handler 2 broke man`);
            }
        })
        .then(cardData =>{
            let convertedCards = valueConvertor(cardData.cards)
            // hands is an array with two arrays as elements
            let [player, computer] = dealCards(convertedCards);
            res.render('home.ejs', {player, computer});
        })
        .catch(err => {
            console.log(`Dang 'ol API Error: ${err}`);
            res.render('error.ejs');
        })
});

app.get('*', (req, res) => {
    res.render('error.ejs');
});

app.listen(`${port}`, () => console.log(`deckOfCardsAPI running on ${port}`));
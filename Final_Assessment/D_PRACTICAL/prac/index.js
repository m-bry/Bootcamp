const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));
PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=>{
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=Gq6jldSFuwgjj5R4Cvc862lDL8VsQnDJ&limit=8&offset=0&rating=g&bundle=clips_grid_picker')
    .then(res => res.json())
    .then(json => json.data)
    .then(data => res.render('home.ejs', {data: null, trending: data},))
    .catch(err => console.log(err));
});

app.get('/search', (req, res)=>{
    const { q } = req.query;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Gq6jldSFuwgjj5R4Cvc862lDL8VsQnDJ&q=${q}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
    .then(res => res.json())
    .then(json => json.data)
    .then(data => res.render('home.ejs', {data: data, trending: null }))
    .catch(err => console.log(err));
});

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
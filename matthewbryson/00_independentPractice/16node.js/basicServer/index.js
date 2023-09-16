const express = require('express');

const app = express();
// allowing access to all the fancy methoids
const port = process.env.PORT || 3000;

// app.get('/', (req, res)=>{
//     res.send('grootRoute');
// });

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req, res)=>{
    res.send('homeRoute');
});

app.listen(port, () => console.log(`Basic Server on port ${port}`));
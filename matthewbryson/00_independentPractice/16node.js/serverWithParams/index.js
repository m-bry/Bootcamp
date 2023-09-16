const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.redirect('/home');
});

app.get('/home' , (req, res) =>{
    res.send('homeRoute');
});


//colon means variable
// variables in a url are called params
// app.get('/:fruits', (req, res)=>{
//     res.send(`I am the ${req.params.fruits} route`)
//     //do stuff here
// })

app.get("/:fruits/home", (req,res) =>{
res.send(`I am the ${req.params.fruits} route again`);
});

app.get('/money/:amount', (req, res) => {
    console.log(typeof req.params.amount);
    res.send(`I have $${req.params.amount}`);
});

app.listen(port, () => console.log(`serverWithParams on port ${port}`));

app.get('/money/:amount', (req, res) =>{
    let result = Number(req.params.amount)
    if(!isNaN(result)) {
        res.send(`I have $${result+2}!`);
    } else {
        res.send(`Please supply a number`);
    }
})
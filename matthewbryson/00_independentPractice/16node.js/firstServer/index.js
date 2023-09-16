const express = require('express');
//importing express; this is a function that takes in astring and spits out stuff
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;

// composed of two parts - verb and a route
app.get('/', (req, res) => {
    // response.send('My first Server');
    res.end('I am done')
    req.send('My first Server');
});

app.listen(port, ()=> console.log(`first server running on port ${port}`));
//What do we do with this stuff

//function inside of an object 

 //I am eric ross
 //hhhhggttyyyuuiiopouytrewqasdfghjnbbnbnb  

 app.get('/home', (req, res)=>{
    res.send('The home route works');

app.get('/contact', (req, res) =>{
    res.send('The Contact Page');
})

app.get('/home/contact', (req, res) =>{
    res.send('yomamadick');
})

app.get('*',(req, res) => {
    res.send('I am everything else');
})

})
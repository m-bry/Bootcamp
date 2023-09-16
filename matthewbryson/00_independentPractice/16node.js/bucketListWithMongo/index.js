//EXPRESS SERVER
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//LOGGER
const logger = require('morgan');
app.use(logger('dev'));

//BODY PARSE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HOW TO CONNECT
require('./server/connections/mongoConnection.js');
require('./server/models/bucketLI_Model.js');
const { bucketLI_Model } = require('./server/models/bucketLI_Model.js');
const { default: mongoose } = require("mongoose");

//ROUTES
app.get('/', (req, res) => {
    res.redirect("/home");
});

app.get('/home', (req, res) => {
    res.send("Home Page");
});

//CREATE DATA
app.post('/bucket', (req, res) => {
    let desc = req.body.desc;
    bucketLI_Model.create({desc})
    .then( result => res.json(result))
    .catch(error => {
        // STILL TELL USER ERROR DATA IN JSON
        // WE CAN SEND DATA TO DATABASE
        // AND SEND BACK A MESSAGE ENCODED AS JSON
        res.status(444).json({message: `Unable to create dang 'ol data`})
    })
});

//READ DATA
app.get('/bucket', (req,res)=>{
    bucketLI_Model.find({})
    .catch(error=>{
        console.log(`Dang 'ol error with reading data on backend: ${error.messages}`)
        res.status(444).json({message: 'Unable to read data on backend'})
    })
    .then(result =>{
        res.json(result)
    })
})

//DELETE DATA
app.delete('/bucket/:id', (req,res)=>{
    let bucket_id = req.params.id;
    bucketLI_Model.findIdAndDelete(bucket_id)
    .then((result) => {
        res.json(result);
    })
    .catch(err=> {
        console.log(`Dang 'ol error deleting from database ${DB}: ${err.message}`);
        res.status(466).json({message: `Unable to delete dang 'ol data`});
    })
})

//UPDATE DATA
app.put('/bucket/:id', (req,res)=>{
})

app.listen(port, () => console.log(`apiBuild running on port ${port}`));
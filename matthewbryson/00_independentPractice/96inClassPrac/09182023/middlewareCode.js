const express = require("express");
const app = express()

app.use(function(req, res, next){
    req.dogPropertyValue = 'Shipley'
})

app.get('/doggyHorse', (req,res)=>{
    res.json({message: `hello from ${req.dogPropertyValue}`});
});
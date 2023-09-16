var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<p><b>How</b> are you?</p>');
})

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/test.html');
})

app.get('/contact', function(req, res){
    res.send("You've reached the contact page.");
})

app.listen(3000, function() {
    console.log("App is running on port 3000!");
});
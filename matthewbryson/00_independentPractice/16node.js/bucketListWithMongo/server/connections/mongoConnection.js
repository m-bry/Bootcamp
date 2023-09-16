//.ENV FILE
require('dotenv').config();

//MONGODB CAPATABILITY W/ MONGOOSE
const mongoose = require('mongoose');
const { DB, URI, DB_USER, DB_PASS } = process.env;
const endpoint = `${URI}/${DB}`;

const connectObj = {
    authSource: 'admin',
    user: DB_USER,
    pass: DB_PASS
};

//HOW TO CONNECT
mongoose.connect(endpoint, connectObj)
    .then(() => (`Connected to ${DB}`))
    .catch(error => console.log(`Dang 'ol connection error on ${DB}: ${error}`));
    console.log(DB, '', URI);


require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = require('morgan')
app.use(logger('dev'));

// const {DB, URI} = process.env;
const DB = process.env.DB;
const URI = process.env.URI;
console.log(DB, "", URI);

//Connection:
const mongoose = require('mongoose');
let url = `${URI}/${DB}`;


let connectionObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    user: "acc",
    pass: "acc_rocks_2020",
};

mongoose.connect(url, connectionObject)
    .then(() => console.log(`Connected to ${DB} database`))
    .catch(err => console.log(`Dang 'ol issue connecting to ${DB} database man.`));

//Blueprints:
// 1) Schema
// 2) Model
// Really, this is one blueprint with two parts

const characSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Some BS']
        },
        age: {
            type: Number,
            min: [16, "Must be at least 16 to play"]
        },
        breed: {
            type: String,
            required: [true, "Must have a breed"]
        },
        villain: {
            type: Boolean,
            default: false
        },
        createdOn: {
            type: Date,
            default: Date.now()
        }
    }
    // {
    //     name: String,
    //     age: Number,
    //     breed: String,
    //     villain: Boolean
    // }
);

//Takes at least two arguments
//1) Name of collection
//2) What schema to apply
const CharacModel = mongoose.model('characs', characSchema);

// Queries
// let charac1 = CharacModel({
//     name: 'Sonic',
//     age: 16,
//     breed: 'Hedgehog',
//     villain: false
// });

// charac1.save()
//     .then(data => console.log(data))
//     .catch(err => console.log(`Dang 'ol issue saving data to ${DB} database`, err.message));

// let charac2 = CharacModel({
//     name: 'Metal Sonic',
//     age: 0 || 16,
//     breed: 'Robotic Hedgehog',
//     villain: true
// });

// charac2.save()
//     .then(data => console.log(data))
//     .catch(err => console.log(`Dang 'ol issue saving data to ${DB} database`, err.message));

//Takes two arguments
//1) Document
//2) Call Back Function
// CharacModel.create(
//     {
//         name: 'Eggman',
//         villain: true,
//         breed: 'Human Being',
//         age: 80
//     }
// )
// .then(receipt => console.log(receipt))
// .catch(error => console.log(`Dang 'ol error`))

// app.get('/', (req, res) => {
//     res.redirect('/home');
// });

CharacModel.find({})
.then(data => console.log(data))
.catch(error => console.log(error));

app.get('/home', (req, res) => {
    res.send('Home Route');
});

app.listen(port, () => console.log(`Sonic app running on port ${port}`));
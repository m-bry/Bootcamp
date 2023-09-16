//REQUIRE MONGOOSE
const mongoose = require('mongoose')

//SCHEMA
const bucketLI_Schema = mongoose.Schema(
    {
        desc: {
            type: String,
            maxLength: 20,
            required: [true, "Must have a description."],
        },
        isComp: {
            type: Boolean,
            default: false,
        },
        createdOn: {
            type: Date,
            default: Date.now(),
        }
    }
);

exports.bucketLI_Model = mongoose.model('bucketItem', bucketLI_Schema);
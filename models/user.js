'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    examinerid: Number,
    claimadjusterid: Number,
    liscenceid: Number,
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    phone: Number,
    password: String,


});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/commercialInsurance', {
    useMongoClient: true
});

module.exports = mongoose.model('user', userSchema);
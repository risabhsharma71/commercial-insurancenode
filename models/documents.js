'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const docSchema = mongoose.Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    },
    userid: String,

});




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/commercialInsurance', {
    useMongoClient: true
});

module.exports = mongoose.model('files', docSchema);
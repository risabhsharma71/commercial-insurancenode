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
mongoose.connect('mongodb://rpqbci:rpqb123@ds163721.mlab.com:63721/commercialinsurance', { useMongoClient: true });

module.exports = mongoose.model('files', docSchema);

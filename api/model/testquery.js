const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    message: {
        type: String
    },
    subject: {
        type: String
    },
    email:{
        type:String
    }
},
);
module.exports = mongoose.model('User', user); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    email:{
        type:String
    },
    number: Number
    ,
    amount: {
        type: Number
    }
},
);
module.exports = mongoose.model('Users', user); 
const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");
const CardSchema = new mongoose.Schema({
    id:{
        type:String,
        default: uuidv4,
    },
    CardNumber:{
        type:String,
        required:true
    },
    Expiration:{
        type:String,
        required:true
    },
    CVC:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
})

const Card = new mongoose.model("Card", CardSchema);
module.exports  = Card;
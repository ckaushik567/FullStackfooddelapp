const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");
const ProfileModalSchema = new mongoose.Schema({
    id:{
        type:String,
        default: uuidv4,
    },
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    }
})

const ProfileModal = new mongoose.model("ProfileModal", ProfileModalSchema);
module.exports  = ProfileModal;
const mongoose = require('mongoose');
const RestSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    Name:{
         type:String,
        required:true,
    },
    image:{
        type:String
    }
})

const  Rest = new mongoose.model("Rest", RestSchema);
module.exports  = Rest;
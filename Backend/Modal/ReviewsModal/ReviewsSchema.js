const mongoose = require('mongoose');
const reviewsSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    Name:{
         type:String,
        required:true,
    },
    Location:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    Text:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
})

const  Reviews = new mongoose.model("Reviews", reviewsSchema);
module.exports  = Reviews;
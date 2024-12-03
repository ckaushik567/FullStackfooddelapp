const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    Name:{
         type:String,
        required:true,
    },
    restName:{
        type:String,
        required:true,
    },
    image:{
        type:String
    }
})

const  Category = new mongoose.model("Category", CategorySchema);
module.exports  = Category;
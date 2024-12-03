const mongoose = require('mongoose');
const FoodItemSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    FoodName: {
        type: String,
        required: true
    },
    Description:{
         type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
})

const FoodItem = new mongoose.model("foodItem", FoodItemSchema);
module.exports  = FoodItem;
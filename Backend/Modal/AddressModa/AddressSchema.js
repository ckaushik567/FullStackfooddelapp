const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");
const AddressSchema = new mongoose.Schema({
    id:{
        type:String,
        default: uuidv4,
    },
    State:{
        type:String,
        enum:[
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
            "Andaman and Nicobar Islands",
            "Chandigarh",
            "Dadra and Nagar Haveli and Daman and Diu",
            "Delhi",
            "Jammu and Kashmir",
            "Ladakh",
            "Lakshadweep",
            "Puducherry",
          ]
    },
    City:{
        type:String,
        required:true
    },
    PinCode:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})

const Address = new mongoose.model("Address", AddressSchema);
module.exports  = Address;
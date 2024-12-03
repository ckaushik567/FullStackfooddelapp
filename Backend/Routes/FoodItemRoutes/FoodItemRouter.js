const express = require('express');
const app = express();
const router = express.Router();
const FoodItems = require('../../Modal/FoodItemModal/FoodItemSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})
  const upload = multer({storage:storage});
  
router.post('/foodItem',upload.single('image'),async (req,res)=>{
    try {
        // const imagePath = req.file ? req.file.path:null
        const imagePath = `${req.file.filename}`;
        // const imageBase64 = req.file ? req.file.buffer.toString('base64') : null;

        const {id,FoodName,Description,Category,Price} = req.body;
        const foodItems = new FoodItems({id,FoodName,Description,Category,Price,image:imagePath});
        await foodItems.save();
        res.status(200).json({message:"FoodItem added successfully",foodItems})

    }catch(error) {
        console.log(error);
        res.status(201).json({message:"Server Error"});
    }
});

router.get('/foodItems',async (req,res)=>{
    try{
        const foodItemData = await FoodItems.find();
        res.status(200).json({meassge:"data",foodItemData});

    }catch(err){
        console.log(err);
        res.status(200).json({meassge:"Server error"})
    }
})

module.exports = router;
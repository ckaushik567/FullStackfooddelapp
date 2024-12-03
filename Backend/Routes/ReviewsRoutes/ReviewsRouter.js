const express = require('express');
const app = express();
const router = express.Router();
const ReviewsModal = require('../../Modal/ReviewsModal/ReviewsSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})
  const upload = multer({storage:storage});

router.post('/reviews',upload.single('image') ,async (req, res) => {
    try {
        const { id, Name,Location,date,Text} = req.body;
        const imagePath = `${req.file.filename}`;
        const reviews = new ReviewsModal({ id, Name,Location,date,Text,image:imagePath});
        await reviews.save();
        res.status(200).json({ message: "Reviews added successfully", reviews })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/reviewsData' ,async (req, res) => {
    try {
        const reviewsDatas = await ReviewsModal.find();
        res.status(200).json({ meassge: "data", reviewsDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
});

module.exports = router;
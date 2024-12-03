const express = require('express');
const app = express();
const router = express.Router();
const CategoryModal = require('../../Modal/CategoryModal/CategorySchema');
const multer = require('multer')

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})
  const upload = multer({storage:storage});

router.post('/category',upload.single('image'), async (req, res) => {
    try {
        const { id, Name,restName} = req.body;
        const imagePath = `${req.file.filename}`;
        const category = new CategoryModal({ id, Name,restName,image:imagePath});
        await category.save();
        res.status(200).json({ message: "Category added successfully", category })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/categoryData' ,async (req, res) => {
    try {
        const categoryDatas = await CategoryModal.find();
        res.status(200).json({ meassge: "data", categoryDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
});

module.exports = router;
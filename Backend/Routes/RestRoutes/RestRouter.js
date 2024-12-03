const express = require('express');
const app = express();
const router = express.Router();
const RestModal = require('../../Modal/RestModal/RestSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})
  const upload = multer({storage:storage});

router.post('/rest',upload.single('image'), async (req, res) => {
    try {
        const { id, Name} = req.body;
        const imagePath = `${req.file.filename}`;
        const rest = new RestModal({ id, Name ,image:imagePath});
        await rest.save();
        res.status(200).json({ message: "Rest added successfully", rest })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/restData' ,async (req, res) => {
    try {
        const restDatas = await RestModal.find();
        res.status(200).json({ meassge: "data", restDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
});

module.exports = router;
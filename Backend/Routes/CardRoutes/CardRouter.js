const express = require('express');
const app = express();
const router = express.Router();
const CardModal = require('../../Modal/CardModal/CardSchema');

router.post('/card', async (req, res) => {
    try {
        const { id, CardNumber, Expiration,CVC,Name} = req.body;
        if (!CardNumber || !Expiration || !CVC || !Name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const card = new CardModal({ id, CardNumber, Expiration,CVC,Name });
        await card.save();
        res.status(200).json({ message: "Address added successfully", card })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/cardData', async (req, res) => {
    try {
        const cardDatas = await CardModal.find();
        res.status(200).json({ meassge: "data", cardDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
})

router.put('/card/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {CardNumber, Expiration,CVC,Name } = req.body;

        if (!CardNumber || !Expiration || !CVC || !Name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedCard = await CardModal.findOneAndUpdate(
            { id },
            { CardNumber, Expiration,CVC,Name },
            { new: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ message: "Address not found" });
        }

        res.status(200).json({ message: "Address updated successfully", card: updatedCard });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router
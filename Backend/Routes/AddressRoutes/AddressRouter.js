const express = require('express');
const app = express();
const router = express.Router();
const AddressModal = require('../../Modal/AddressModa/AddressSchema');

router.post('/address', async (req, res) => {
    try {
        const { id, State, City,PinCode, Mobile, Address} = req.body;
        if (!State || !City || !PinCode || !Mobile || !Address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const address = new AddressModal({ id, State, City,PinCode, Mobile, Address });
        await address.save();
        res.status(200).json({ message: "Address added successfully", address })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/addressData', async (req, res) => {
    try {
        const addressDatas = await AddressModal.find();
        res.status(200).json({ meassge: "data", addressDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
})

router.put('/address/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {State, City,PinCode, Mobile, Address } = req.body;

        if (!State || !City || !PinCode || !Mobile || !Address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedAddress = await AddressModal.findOneAndUpdate(
            { id },
            { State, City,PinCode, Mobile, Address },
            { new: true }
        );

        if (!updatedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }

        res.status(200).json({ message: "Address updated successfully", address: updatedAddress });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.delete('/address/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAddress = await AddressModal.findOneAndDelete({ id });
        if (!deletedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }

        res.status(200).json({ message: "Address deleted successfully", address: deletedAddress });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});




module.exports = router
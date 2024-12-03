const express = require('express');
const app = express();
const router = express.Router();
const ProfileModal = require('../../Modal/ProfileModal/ProfileModal');
const { jwtAuth } = require('../../Jwt/Jwt');

router.post('/profile', async (req, res) => {
    try {
        const { id, FullName,Email, Gender,Country} = req.body;
        if (!FullName || !Email || !Gender || !Country) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const profile = new ProfileModal({ id, FullName,Email, Gender,Country });
        await profile.save();
        res.status(200).json({ message: "Address added successfully", profile })

    } catch (error) {
        console.log(error);
        res.status(201).json({ message: "Server Error" });
    }
});

router.get('/profileData' ,jwtAuth, async (req, res) => {
    try {
        const profileDatas = await ProfileModal.find();
        res.status(200).json({ meassge: "data", profileDatas });

    } catch (err) {
        console.log(err);
        res.status(200).json({ meassge: "Server error" })
    }
})

router.put('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {FullName,Email, Gender,Country } = req.body;

        if (!FullName || !Email || !Gender || !Country) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedProfile = await ProfileModal.findOneAndUpdate(
            { id },
            { id, FullName,Email, Gender,Country },
            { new: true }
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.status(200).json({ message: "Profile updated successfully", profile: updatedProfile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router
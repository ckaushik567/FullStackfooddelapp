const express = require('express');
const app = express();
const router = express.Router();
const Users = require('../../Modal/userModal/UserSchema');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const {jwtAuth,generateToken} = require('../../Jwt/Jwt');
// const { session } = require('passport');
// const passport = require('../Auth/auth');


// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.urlencoded({ extended: true }));


router.post('/signup', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const { Name, Email, PhoneNumber, Password } = req.body;
        const hasedPass = await bcrypt.hash(Password, salt);
        const users = new Users({ Name, Email, PhoneNumber, Password: hasedPass });
        const email = await Users.findOne({ Email });

        if (!Password || Password.length < 8) {
            res.status(400).json({ message: "Password must be at least 8 characters long" });
        }

        if (email) {
             res.status(401).json({ message: "Email alredy exits" });
        }
        
        const responce = await users.save();
        const payload={
            id:responce.id,
            Name:responce.Name
        }

        const token = generateToken(payload)

        res.status(201).json({ message: "User creted succesfully", user: users,token:token });
        
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {

    try {
        const { Email, Password } = req.body;
        const user = await Users.findOne({ Email: Email });
        if (!user) {
            return res.status(400).json({ message: "UsserName not found" });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);

        if (!isMatch) {
           return res.status(404).json({ message: "password not found" })
        }
        else {
            const payload={
                id:user.id,
                Name:user.Name
            }
            const token = generateToken(payload);
            res.status(200).json({ message: "Login succesfull",
                Name:user.Name,token:token
        });
        }
        
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router
const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        isAdmin: req.body.isAdmin,
    });
    try {
        const user = await newUser.save();
        const { password, ...info } = user._doc;
        const length = req.body.password.length;
        let pass = '';
        while (pass.length < length) {
            pass = pass.concat('*');
        }

        res.status(201).json({ ...info, password: pass });
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    try {
        console.log('login');
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (!user) {
            res.status(403).json('Wrong password or username');
        } else {
            var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            const { password, ...info } = user._doc;
            if (originalPassword !== req.body.password) {
                res.status(401).json('Wrong password or username');
            } else {
                const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {
                    expiresIn: '5d',
                });
                res.status(200).json({ ...info, accessToken });
            }
        }

        // Decrypt
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

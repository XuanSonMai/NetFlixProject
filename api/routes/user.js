const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

//UPDATE

router.put('/find/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            // req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
            const length = req.body.password.length;
            let pass = '';
            while (pass.length < length) {
                pass = pass.concat('*');
            }
            // for (let i = 0; i < length; i++) {
            //     pass = pass.concat('*');
            // }

            req.body.password = pass;
        }

        try {
            console.log('id', req.params.id);
            const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//DELETE
router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json('Deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        console.log(req.user.isAdmin, req.user.id);
        res.status(403).json({ Mess: 'You is not admin' });
    }
});

//GET ALL
router.get('/', verify, async (req, res) => {
    const query = req.query.new;

    try {
        const users = query ? await User.find().sort({}).limit(2) : await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET USER STATS
router.get('/stats', async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    console.log('stats');

    try {
        const data = await User.aggregate([
            { $project: { month1: { $month: '$createdAt' }, myyear: { $second: '$createdAt' } } },
            {
                $group: {
                    _id: '$month1',
                    count: { $sum: 1 },
                },
            },
        ]);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

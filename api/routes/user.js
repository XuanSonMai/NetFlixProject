const router = require('express').Router();
const User = require('../model/User');
const CryptoJS = require('crypto-js');

//UPDATE

router.put('/:id', async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
    }
});

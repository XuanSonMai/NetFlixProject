const router = require('express').Router();
const List = require('../models/List');

const verify = require('../verifyToken');

//POST

router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        console.log(newList);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
});

//PUT
router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedList);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json({ Mess: 'You is not admin' });
    }
});

//DELETE
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json('The List has been deleted');
        } catch (error) {
            res.status(403).json('You are not allowed');
        }
    } else {
        res.status(403).json('You are not Admin');
    }
});

//GET BY ID
router.get('/find/:id', verify, async (req, res) => {
    try {
        const List = await List.findById(req.params.id);
        res.status(200).json(List);
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET ALL
router.get('/', verify, async (req, res) => {
    try {
        console.log('get all');
        const list = await List.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET
router.get('/options', verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    const titleQuery = req.query.title;
    console.log(typeQuery);

    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery } }]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 100 } }]);
        }

        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

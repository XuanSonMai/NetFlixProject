const router = require('express').Router();
const Movie = require('../models/Movie');

const verify = require('../verifyToken');

//POST

router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        console.log(newMovie);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
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
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedMovie);
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
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json('The movie has been deleted');
        } catch (error) {
            res.status(403).json('You are not allowed');
        }
    }
});

//GET BY ID
router.get('/find/:id', verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET ALL
router.get('/', verify, async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET RANDOM
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    console.log(type);
    let movie;
    try {
        if (type === 'series') {
            movie = await Movie.aggregate([{ $match: { isSeries: true } }, { $sample: { size: 3 } }]);
        } else {
            movie = await Movie.aggregate([{ $match: { isSeries: false } }, { $sample: { size: 3 } }]);
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

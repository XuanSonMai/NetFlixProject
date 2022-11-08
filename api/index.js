const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//ROUTE
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const moviesRoute = require('./routes/movies');
const listRouter = require('./routes/list');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/lists', listRouter);

app.listen(8800, () => {
    console.log('Backend server is running!');
});

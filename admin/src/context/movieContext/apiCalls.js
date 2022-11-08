import {
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
    deleteMoviesSuccess,
    deleteMoviesFailure,
    deleteMoviesStart,
    createMoviesStart,
    createMoviesSuccess,
    createMoviesFailure,
} from './MovieActions';
import axios from 'axios';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get('/movies', {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });

        console.log('data', res.data);
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
};

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMoviesStart());

    try {
        await axios.delete('/movies/' + id, {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });
        console.log('delete success');
        dispatch(deleteMoviesSuccess(id));
    } catch (error) {
        console.log('delete failue');
        dispatch(deleteMoviesFailure());
    }
};

export const createMovie = async (movie, dispatch) => {
    dispatch(createMoviesStart());

    try {
        console.log('CREAT MOVIEE');
        const res = await axios.post('/movies/', movie, {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });
        console.log('res', res);

        dispatch(createMoviesSuccess(res.data));
    } catch (error) {
        console.log('CREAT FAILURE');
        dispatch(createMoviesFailure());
    }
};

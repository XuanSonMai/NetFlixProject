import {
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
    deleteMoviesSuccess,
    deleteMoviesFailure,
    deleteMoviesStart,
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

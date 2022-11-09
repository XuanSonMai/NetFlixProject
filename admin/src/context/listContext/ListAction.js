import { list } from 'firebase/storage';

//ACTION GET
export const getMoviesStart = () => ({
    type: 'GET_MOVIES_START',
});

export const getMoviesSuccess = (movies) => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: movies,
});

export const getMoviesFailure = () => ({
    type: 'GET_MOVIES_FAILURE',
});

//ACTION DELETE
export const deleteListStart = () => ({
    type: 'DELETE_LIST_START',
});
export const deleteListSuccess = (id) => ({
    type: 'DELETE_LIST_SUCCESS',
    payload: id,
});
export const deleteListFailure = () => ({
    type: 'DELETE_LIST_FAILURE',
});

//ACTION CREATE
export const createListStart = () => ({
    type: 'CREATE_LIST_START',
});
export const createListSuccess = (list) => ({
    type: 'CREATE_LIST_SUCCESS',
    payload: list,
});
export const createListFailure = () => ({
    type: 'CREATE_LIST_FAILURE',
});

//ACTION UPDATE
export const updateMoviesStart = () => ({
    type: 'UPDATE_MOVIE_START',
});
export const updateMoviesSuccess = (movie) => ({
    type: 'UPDATE_MOVIE_SUCCESS',
    payload: movie,
});
export const updateMoviesFailure = () => ({
    type: 'UPDATE_MOVIE_FAILURE',
});

//ACTION GETLISTLIST
export const getListsStart = () => ({
    type: 'GET_LISTS_START',
});
export const getListsSuccess = (lists) => ({
    type: 'GET_LISTS_SUCCESS',
    payload: lists,
});
export const getListsFailure = () => ({
    type: 'GET_LISTS_FAILURE',
});

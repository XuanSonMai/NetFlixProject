import { createContext, useEffect, useReducer, useState } from 'react';
import MovieReducer from './MovieReducer';

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    console.log('currentstate ', state);
    // useEffect(() => {
    //     console.log(state.user);
    //     localStorage.setItem('user', JSON.stringify(state.user));
    // }, [state.user]);

    return (
        <MovieContext.Provider
            value={{ movies: state.movies, isFetching: state.isFetching, error: state.error, dispatch }}
        >
            {children}
        </MovieContext.Provider>
    );
};

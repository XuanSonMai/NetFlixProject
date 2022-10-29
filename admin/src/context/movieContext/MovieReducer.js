const MovieReducer = (state, action) => {
    console.log('state', state, 'action', action);
    switch (action.type) {
        case 'GET_MOVIE_START':
            return {
                movie: [],
                isFetcjng: true,
                error: false,
            };
        case 'GET_MOVIE_SUCCESS':
            return {
                user: action.payload,
                isFetcjng: false,
                error: false,
            };
        case 'GET_MOVIE_FAILURE':
            return {
                user: null,
                isFetcjng: false,
                error: true,
            };
        case 'LOGOUT':
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        default:
            return { ...state };
    }
};
export default MovieReducer;

const ListReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LISTS_START':
            return {
                lists: [],
                isFetching: true,
                error: false,
            };
        case 'GET_LISTS_SUCCESS':
            return {
                lists: action.payload,
                isFetching: false,
                error: false,
            };
        case 'GET_LISTS_FAILURE':
            return {
                lists: [],
                isFetching: false,
                error: true,
            };
        case 'CREAT_LIST_START':
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case 'CREAT_LIST_SUCCESS':
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            };
        case 'CREAT_LIST_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case 'UPLOAD_MOVIE_START':
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case 'UPLOAD_MOVIE_SUCCESS':
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false,
            };
        case 'UPLOAD_MOVIE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case 'GET_MOVIES_START':
            return {
                movies: [],
                isFetching: true,
                error: false,
            };
        case 'GET_MOVIES_SUCCESS':
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        case 'GET_MOVIES_FAILURE':
            return {
                movies: [],
                isFetching: false,
                error: true,
            };
        case 'DELETE_LIST_START':
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case 'DELETE_LIST_SUCCESS':
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: true,
            };
        case 'DELETE_LIST_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        default:
            return { ...state };
    }
};
export default ListReducer;

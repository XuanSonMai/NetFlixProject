const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetcjng: true,
                error: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetcjng: false,
                error: false,
            };
        case 'LOGIN_FAILURE':
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
export default AuthReducer;

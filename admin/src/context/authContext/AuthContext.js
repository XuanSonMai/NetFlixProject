import { createContext, useEffect } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
const useReducer2 = (callBack, initState) => {
    console.log('handle usereduce ccccccc');
    const dispatch = (action) => {
        if (action.payload) {
            if (JSON.parse(localStorage.getItem('user'))._id !== action.payload._id) {
                console.log('set lai local');
                localStorage.setItem('user', JSON.stringify(action.payload));
            } else {
            }
        } else {
            console.log(action);
        }
        return callBack(initState, action);
    };

    // return {
    //     dispatch: (action) => {
    //         return callBack(initState, action);
    //     },
    //     state: initState,
    // };
    const arrays = [initState, dispatch];

    return arrays;
};
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer2(AuthReducer, INITIAL_STATE);
    console.log('rerender authecontext');
    // useEffect(() => {
    //     console.log(state.user);
    //     localStorage.setItem('user', JSON.stringify(state.user));
    // }, [state.user]);

    useEffect(() => {
        console.log('effect');
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

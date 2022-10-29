// TRUYEN VAO DISPATCH <==> ACTIONS
export const loginStart = () => ({ type: 'LOGIN_START' });

export const loginSuccess = (user) => {
    console.log('type success');

    return {
        type: 'LOGIN_SUCCESS',
        payload: user,
    };
};

export const loginFailure = () => ({
    type: 'LOGIN_FAILURE',
});

export const logout = () => ({
    type: 'LOGOUT',
});

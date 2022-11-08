import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure,
} from './ListAction';
import axios from 'axios';

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get('/lists', {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });

        console.log('data', res.data);
        dispatch(getListsSuccess(res.data));
    } catch (error) {
        dispatch(getListsFailure());
    }
};

export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        console.log('/lists/' + id);
        await axios.delete('/lists/' + id, {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });

        console.log('delete success');
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
};

import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure,
    createListStart,
    createListSuccess,
    createListFailure,
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
export const createList = async (list, dispatch) => {
    dispatch(createListStart());

    try {
        console.log('CREAT list');
        const res = await axios.post('/lists/', list, {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken },
        });
        console.log('createdlst is', res.data);
        dispatch(createListSuccess(res.data));
    } catch (error) {
        console.log('CREAT FAILURE');
        dispatch(createListFailure());
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

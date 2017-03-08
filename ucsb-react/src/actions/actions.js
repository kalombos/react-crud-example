import * as constants from '../constants/actionTypes';
import fetchWrapper  from '../utils/actionsHelper';


function itemsList(data) {
    return {
        type: constants.LIST_ITEMS,
        payload: data
    };
}


export function itemsListAsync() {
    let options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return (dispatch) => {
        return fetchWrapper('http://localhost:8000/api/items/', options)
            .then(success => {
                dispatch(itemsList(success));
            })
    };
}
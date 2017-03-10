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

export function createItemAsync(data) {
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data )
    };
    return (dispatch) => {
        return fetchWrapper('http://localhost:8000/api/items/', options)
            .then(success => {
                return success;
            })
    };
}

export function getItemAsync(id) {
    let options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return (dispatch) => {
        return fetchWrapper('http://localhost:8000/api/items/' + id + '/', options)
            .then(success => {
                return success;
            })
    };
}

export function updateItemAsync(data) {
    let options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data )
    };
    return (dispatch) => {
        return fetchWrapper('http://localhost:8000/api/items/' + data.id + '/', options)
            .then(success => {
                return success;
            })
    };
}

export function deleteItemAsync(id) {
    let options = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return (dispatch) => {
        return fetchWrapper('http://localhost:8000/api/items/' + id + '/', options)
            .then(success => {
                return success;
            })
    };
}
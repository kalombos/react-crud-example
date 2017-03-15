import * as constants from '../constants/actionTypes';

const initialState = {
    itemsList: []
};


export default function items(state = initialState, { type, payload }) {
    if(type === constants.LIST_ITEMS) {
        return Object.assign({}, state, {
            itemsList: payload
        });
    }
    return state;
}

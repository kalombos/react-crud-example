import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import {modelReducer, formReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux'



const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer,
    itemModel: modelReducer('itemModel', {name: '', parent: null}),
    itemForm: formReducer('itemModel', {name: '', parent: null})
});

export default rootReducer;

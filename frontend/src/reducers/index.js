import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import {modelReducer, formReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar';



const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    routing: routerReducer,
    items: itemsReducer,
    itemModel: modelReducer('itemModel', {name: '', parent: ''}),
    itemForm: formReducer('itemModel', {name: '', parent: ''})
});

export default rootReducer;

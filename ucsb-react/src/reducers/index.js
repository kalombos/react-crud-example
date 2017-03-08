import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';



const rootReducer = combineReducers({
    items: itemsReducer
});

export default rootReducer;

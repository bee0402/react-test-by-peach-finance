import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import reset from'./resetReducer';
import shoppingLists from './shoppingListsReducer';


const rootReducer = combineReducers({
    form: formReducer,
    auth,
    reset,
    shoppingLists,
});

export default rootReducer;

// Global Imports
import { combineReducers } from 'redux';

// Local Imports
import { HomeReducer } from '@Redux/Reducers/Home';

const RootReducer = combineReducers({
    home: HomeReducer,
});

export default RootReducer;

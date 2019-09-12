// Global Imports
import { combineReducers } from 'redux';

// Local Imports
import { InitReducer } from '@Store/Reducers/InitReducer';

const RootReducer = combineReducers({
	Init: InitReducer,
});

export default RootReducer;

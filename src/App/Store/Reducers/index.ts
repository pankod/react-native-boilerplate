// Global Imports
import { combineReducers } from 'redux';

// Local Imports
import { InitReducer } from '@App/Store/Reducers/InitReducer';
import { RouterReducer } from '@App/Store/Reducers/RouterReducer';

const RootReducer = combineReducers({
	Init: InitReducer,
	Router: RouterReducer
});

export default RootReducer;

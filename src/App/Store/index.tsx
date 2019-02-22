// Global imports
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Local imports
import RootReducer from '@App/Store/Reducers';

declare const window: any;

// Create Store
const configureStore = (preloadedState: object) => {
	const middlewares = [thunk];

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(createLogger());
	}

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const composed = [(applyMiddleware(...middlewares))];

	const store = createStore(RootReducer, preloadedState, composeEnhancers(...composed));

	return store;
};

export default configureStore;

// Global imports
import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

// Local imports
import RootReducer from '@Redux/Reducers';

declare const window: any;

const persistConfig = {
    'key': 'root',
    'storage': AsyncStorage,
    'version': 1
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// Create Store
const configureStore = (preloadedState: object) => {
    const middlewares: Array<object> = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger({}));
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const composed = [(applyMiddleware(...middlewares))];

    const store = createStore(persistedReducer, preloadedState, composeEnhancers(...composed));
    const persistedStore = persistStore(store);

    return persistedStore;
};

export default configureStore;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Reducers from "./Reducers";

const middlewares: any = [thunk];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export const makeStore = () => {
    return createStore(Reducers, {}, enhancer);
};

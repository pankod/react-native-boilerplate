import { combineReducers } from "redux";

import { FeedReducer } from "@Redux/Reducers/feed";

const RootReducer = combineReducers({
    feed: FeedReducer,
});

export default RootReducer;

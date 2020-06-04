import { ActionConsts } from "@Definitions";
import { IFeedReducer } from "@Interfaces";
import { ApiStatus } from "@Interfaces/enum";

const INITIAL_STATE: IFeedReducer.State = {
    status: ApiStatus.init,
};

export const FeedReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionConsts.Feed.Request:
            return {
                ...state,
                status: ApiStatus.loading,
            };
        case ActionConsts.Feed.Success:
            return {
                ...state,
                ...action.payload,
                status: ApiStatus.loaded,
            };
        case ActionConsts.Feed.Failed:
            return {
                ...state,
                error: action.error,
                status: ApiStatus.failed,
            };

        default:
            return state;
    }
};

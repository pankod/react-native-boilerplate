import { ActionConsts } from "@Definitions";
import { IPostListReducer } from "@Interfaces";
import { ApiStatus } from "@Interfaces/enum";

const INITIAL_STATE: IPostListReducer.State = {
    status: ApiStatus.init,
    data: [],
};

export const POST_LIST_STATE = INITIAL_STATE;

export const PostListReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionConsts.Post.List.Request:
            return {
                ...state,
                status: ApiStatus.loading,
            };
        case ActionConsts.Post.List.Success:
            return {
                ...state,
                ...action.payload,
                status: ApiStatus.loaded,
            };
        case ActionConsts.Post.List.Failed:
            return {
                ...state,
                error: action.error,
                status: ApiStatus.failed,
            };

        default:
            return state;
    }
};

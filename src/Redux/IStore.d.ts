import { IPostListReducer } from "@Interfaces";

export interface IStore {
    post: {
        list: IPostListReducer.State;
    };
}

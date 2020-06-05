import { ApiStatus } from "@Interfaces/enum";
import { Post } from "@Interfaces";

declare namespace IPostListReducer {
    type State = {
        status: ApiStatus;
        error?: string;
        data: Post.List;
    };
}

export { IPostListReducer };

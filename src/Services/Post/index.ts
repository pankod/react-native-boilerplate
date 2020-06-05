import { API } from "@Services";

import { Post } from "./Post";

export const PostService: Post.Service = {
    List: () => {
        return API.get("/posts");
    },
};

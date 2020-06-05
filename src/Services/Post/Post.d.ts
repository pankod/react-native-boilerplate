import { ApiResponse } from "apisauce";

export type Response<T = void> = Promise<ApiResponse<T>>;

export namespace Post {
    type PostItem = {
        userId: number;
        id: number;
        title: string;
        body: string;
    };

    type List = Array<PostItem>;

    type Service = {
        List: () => Response<List>;
    };
}

import { Dispatch } from "redux";
import { ActionConsts } from "@Definitions";

export const FeedActions = {
    Fetch: () => async (dispatch: Dispatch) => {
        dispatch({
            type: ActionConsts.Feed.Request,
        });

        // API Response
        // TODO: Send request
        // const response = await FeedService.Get();

        // ? If successfull
        dispatch({
            payload: {
                data: ["a", "b"],
            },
            type: ActionConsts.Feed.Success,
        });

        // ? If failed
        // dispatch({
        //     error: "Yetki hatası",
        //     type: ActionConsts.Feed.Failed,
        // });;
    },
};

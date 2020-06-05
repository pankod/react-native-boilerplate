import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { ActionConsts } from "@Definitions";
import { FeedActions } from "@Actions";

describe("Actions", () => {
    // ? Reusable
    const createMockStore = (initialStore = {}) => {
        return configureMockStore([thunk])(initialStore);
    };

    describe("FeedActions", () => {
        it("should dispatch mock data", async () => {
            const { dispatch, getActions } = createMockStore();

            const expectedActions = [
                {
                    type: ActionConsts.Feed.Request,
                },
                {
                    payload: {
                        data: ["a", "b"],
                    },
                    type: ActionConsts.Feed.Success,
                },
            ];

            await FeedActions.Fetch()(dispatch);

            expect(getActions()).toStrictEqual(expectedActions);
        });
    });
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { ActionConsts } from "@Definitions";
import { PostActions } from "@Actions";

describe("Actions", () => {
    // ? Reusable
    const createMockStore = (initialStore = {}) => {
        return configureMockStore([thunk])(initialStore);
    };

    describe("PostActions", () => {
        it("should dispatch retrieved data", async () => {
            const { dispatch, getActions } = createMockStore();

            const expectedActions = [
                {
                    type: ActionConsts.Post.List.Request,
                },
                {
                    payload: expect.arrayContaining([
                        {
                            userId: expect.any(Number),
                            id: expect.any(Number),
                            title: expect.any(String),
                            body: expect.any(String),
                        },
                    ]),
                    type: ActionConsts.Post.List.Success,
                },
            ];

            await PostActions.List()(dispatch);

            expect(getActions()).toStrictEqual(expectedActions);
        });
    });
});

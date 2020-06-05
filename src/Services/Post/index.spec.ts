import nock from "nock";

import { PostService } from "@Services";

describe("Services", () => {
    describe("PostService", () => {
        it("should get posts", async () => {
            nock.recorder.rec();

            const response = await PostService.List();

            expect(response).toBeDefined();
        });
    });
});

import { PostService } from "@Services";

describe("Services", () => {
    describe("PostService", () => {
        it("should get posts", async () => {
            const response = await PostService.List();

            expect(response).toBeDefined();
        });
    });
});

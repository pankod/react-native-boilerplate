import { ApiStatus } from "@Interfaces/enum";

declare namespace IFeedReducer {
    type State = {
        status: ApiStatus;
        error?: string;
    };
}

export { IFeedReducer };

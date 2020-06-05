import { ApiStatus } from "@Interfaces/enum";

export function isInit(status: ApiStatus) {
    return ApiStatus.init === status;
}

export function isLoaded(status: ApiStatus) {
    return ApiStatus.loaded === status;
}

export function isFailed(status: ApiStatus) {
    return ApiStatus.failed === status;
}

export function isLoading(status: ApiStatus) {
    return ApiStatus.loading === status;
}

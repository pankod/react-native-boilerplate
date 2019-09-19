// #region Global Imports
import { stringify } from "query-string";
// eslint-disable-next-line import/no-extraneous-dependencies
import { API_KEY, API_URL } from "react-native-dotenv";
import "isomorphic-fetch";
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports

const BaseUrl = `${API_URL}`;
export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        return new Promise((resolve, reject) => {
            const query = params
                ? `?${stringify({ ...params, api_key: API_KEY })}`
                : "";

            fetch(`${BaseUrl}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: "no-cache",
                headers: {
                    "content-type": "application/json",
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 200) {
                        return resolve(response.json());
                    }
                    return reject(response);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};

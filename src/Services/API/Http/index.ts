// #region Global Imports
// import "isomorphic-unfetch";
import { stringify } from "query-string";
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports
import { API_KEY, API_URL } from "react-native-dotenv";

const BaseUrl = `${API_URL}/api`;

export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        console.log("http");

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
                        console.log("response", response);

                        return response.json().then(resolve);
                    } else {
                        return reject(response);
                    }
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};

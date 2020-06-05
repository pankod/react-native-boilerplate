import { create } from "apisauce";

// TODO: Read from .env
export const API = create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

import { FAKE_API } from "./constants.js";

export const composeApiUrl = (route) => {
    const url = new URL(FAKE_API);
    url.pathname += route;
    return url.toString();
}
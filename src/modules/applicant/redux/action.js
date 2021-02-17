import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./constants";

export const fetchUser = (payload) => ({
    type: FETCH_USER_REQUEST,
    payload
});

export function fetchUserSuccess(payload) {
    return {
        type: FETCH_USER_SUCCESS,
        payload,
    }
}
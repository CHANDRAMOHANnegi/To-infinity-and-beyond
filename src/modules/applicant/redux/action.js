import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SAVE_JOB_REQUEST, SAVE_JOB_SUCCESS, SAVE_JOB_ERROR } from "./constants";

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

export function saveJobRequest(payload) {
    console.log('saved job request ',payload);
    return {
        type: SAVE_JOB_REQUEST,
        payload,
    }
}

export function saveJobSuccess(payload) {
    return {
        type: SAVE_JOB_SUCCESS,
        payload,
    }
}

export function saveJobError(payload) {
    return {
        type: SAVE_JOB_ERROR,
        payload,
    }
}







import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    SAVE_JOB_REQUEST,
    SAVE_JOB_SUCCESS,
    SAVE_JOB_ERROR,
    UNSAVE_JOB_REQUEST,
    UNSAVE_JOB_SUCCESS
} from "./constants";

export function fetchUserRequest(payload) {
    return {
        type: FETCH_USER_REQUEST,
        payload
    }
}

export function fetchUserSuccess(payload) {
    return {
        type: FETCH_USER_SUCCESS,
        payload,
    }
}

export function saveJobRequest(payload) {
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


export function unSaveJobRequest(payload) {
    return {
        type: UNSAVE_JOB_REQUEST,
        payload,
    }
}

export function unSaveJobSuccess(payload) {
    return {
        type: UNSAVE_JOB_SUCCESS,
        payload,
    }
}

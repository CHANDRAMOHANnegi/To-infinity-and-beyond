import {
    FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS,
    UPDATE_JOB_FILTER_REQUEST, UPDATE_JOB_FILTER_SUCCESS
} from "./constants";

export const fetchJobsRequest = (payload) => ({
    type: FETCH_JOBS_REQUEST,
    payload
});

export function fetchJobsSuccess(payload) {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload,
    }
}

export function updateFilterRequest(payload) {
    return {
        type: UPDATE_JOB_FILTER_REQUEST,
        payload,
    }
}

export function updateFilterSuccess(payload) {
    return {
        type: UPDATE_JOB_FILTER_SUCCESS,
        payload,
    }
}
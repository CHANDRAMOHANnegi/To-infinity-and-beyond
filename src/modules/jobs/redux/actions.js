import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "./constants";

export const fetchJobs = (payload) => ({
    type: FETCH_JOBS_REQUEST,
    payload
});

export function fetchJobsSuccess(payload) {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload,
    }
}
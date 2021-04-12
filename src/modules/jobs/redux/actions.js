import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "./constants";

export const fetchJobs = (payload) => {
    // console.log('fetch job action', payload);
    return ({
        type: FETCH_JOBS_REQUEST,
        payload
    });
}

export function fetchJobsSuccess(payload) {
    // console.log('--fetchJobsSuccess action', payload);
    return {
        type: FETCH_JOBS_SUCCESS,
        payload,
    }
}
import produce from 'immer';
import { map, clone } from 'ramda';

import * as actionTypes from './constants';

const initialState = {
    loading: false,
    error: false,
    jobs: [],
    message: "",
    filters: {
        job_type: "All",
        job_location: "All",
        company: "All"
    },
    currentJob: false
};

function jobReducer(state = clone(initialState), { type, payload, error }) {
    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.FETCH_JOBS_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.FETCH_JOBS_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.jobs = payload;
                break;
            }

            case actionTypes.UPDATE_JOB_FILTER_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.UPDATE_JOB_FILTER_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.filters = payload;
                break;
            }

            case actionTypes.FETCH_JOBS_ERROR: {
                draft.loading = false;
                draft.error = error;
                break;
            }
        }
    }
    )
}

export default jobReducer
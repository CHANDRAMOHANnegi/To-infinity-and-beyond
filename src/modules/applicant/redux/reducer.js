import produce from 'immer';
import { map, clone } from 'ramda';

import * as actionTypes from './constants';

const initialState = {
    loading: false,
    error: false,
    message: "",
    user: {},
};

function applicantReducer(state = clone(initialState), { type, payload, error }) {
    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.FETCH_USER_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.FETCH_USER_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.user = payload;
                break;
            }

            case actionTypes.SAVE_JOB_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.SAVE_JOB_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.user.saved_jobs = payload;
                break;
            }
            case actionTypes.UNSAVE_JOB_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.UNSAVE_JOB_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.user.saved_jobs = payload;
                break;
            }
            case actionTypes.UNSAVE_JOB_ERROR: {
                draft.loading = false;
                draft.error = error;
                break;
            }
            case actionTypes.APPLY_JOB_REQUEST: {
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.APPLY_JOB_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.user.applications = payload;
                break;
            }
        }
    })
}

export default applicantReducer;
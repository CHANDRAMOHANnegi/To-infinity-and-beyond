import produce from 'immer';
import { map, clone } from 'ramda';

import * as actionTypes from './constants';

const initialState = {
    loading: false,
    error: false,
    message: "",
    user: {},
    savedJobs:[1]
};

function applicantReducer(state = clone(initialState), { type, payload, error }) {
    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.SAVE_JOB_REQUEST: {
                console.log('SAVE_JOB_REQUEST reducer',payload);
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.SAVE_JOB_SUCCESS: {
                draft.loading = false;
                draft.error = false;
                draft.user.applications=payload;
                break;
            }

            case actionTypes.SAVE_JOB_ERROR: {
                draft.loading = false;
                draft.error = error;
                break;
            }
        }
    })
}

export default applicantReducer;
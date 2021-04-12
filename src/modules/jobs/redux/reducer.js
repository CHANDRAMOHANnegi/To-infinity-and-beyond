import produce from 'immer';
import { map, clone } from 'ramda';

import * as actionTypes from './constants';

const initialState = {
    loading: false,
    error: false,
    jobs: [],
    message: ""
};

function jobReducer(state = clone(initialState), { type, payload, error }) {
    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.FETCH_JOBS_REQUEST: {
                // console.log('reducer', type, payload,);
                draft.loading = true;
                draft.error = false;
                break;
            }

            case actionTypes.FETCH_JOBS_SUCCESS: {
                // console.log('reducer', type, payload,);
                draft.loading = false;
                draft.error = false;
                draft.jobs = payload;
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
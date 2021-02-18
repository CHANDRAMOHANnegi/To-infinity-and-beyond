import { combineReducers } from 'redux';
import jobs from '../modules/jobs/redux/reducer';
import user from '../modules/applicant/redux/reducer';

export default combineReducers({
    jobs,
    user
});

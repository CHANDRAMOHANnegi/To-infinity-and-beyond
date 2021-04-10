import { combineReducers } from 'redux';
import jobReducer from '../modules/jobs/redux/reducer';
import userReducer from '../modules/applicant/redux/reducer';

export default combineReducers({
    jobReducer,
    userReducer
});

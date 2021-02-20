import './App.css';
import { connect } from 'react-redux';

import { useEffect } from 'react';

import JobsData from './data/jobs.json';
import UserData from './data/user.json';

import { fetchUserRequest } from './modules/applicant/redux/action';
import { fetchJobsRequest } from './modules/jobs/redux/actions';

import Jobs from './modules/jobs/index';

function App({ fetchJobsRequest, fetchUserRequest }) {

  useEffect(() => {
    fetchUserRequest(UserData[0]);
    fetchJobsRequest(JobsData);
  }, [])

  return (
    <div className="App">
      <Jobs />
    </div>
  );
}

export default connect(null, { fetchJobsRequest, fetchUserRequest })(App);

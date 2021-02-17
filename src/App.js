import './App.css';
import { useEffect } from 'react';
import { fetchJobs } from './modules/jobs/redux/actions';
import { connect } from 'react-redux';

import JobsData from './data/jobs.json';
import UserData from './data/user.json';

import Jobs from './modules/jobs/index';
import { fetchUser } from './modules/applicant/redux/action';

function App({ fetchJobs }) {

  useEffect(() => {
    fetchJobs(JobsData);
    fetchUser(UserData[0]);
  }, [])

  return (
    <div className="App">
      <Jobs />
    </div>
  );
}

export default connect(null, { fetchJobs, fetchUser })(App);

import './App.css';
import { connect } from 'react-redux';

import { useEffect } from 'react';

import JobsData from './data/jobs.json';
import UserData from './data/user.json';

import { fetchUserRequest } from './modules/applicant/redux/action';
import { fetchJobsRequest } from './modules/jobs/redux/actions';

import Jobs from './modules/jobs/index';
import Header from './components/Header';

function App({ fetchJobsRequest, fetchUserRequest }) {

  useEffect(() => {
    (async function () {
      const firstTime = await localStorage.getItem('firstTime');
      console.log(firstTime, typeof firstTime);
      if (!firstTime || firstTime == null) {
        console.log('======');
        fetchUserRequest(UserData[0])
        fetchJobsRequest(JobsData)
      } else localStorage.setItem('firstTime', 'firstTime');
    })()
  }, [])

  return (
    <div className="App">
      <Header />
      <Jobs />
    </div>
  );
}

export default connect(null, { fetchJobsRequest, fetchUserRequest })(App);

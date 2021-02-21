import './App.css';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import JobsData from './data/jobs.json';
import UserData from './data/user.json';

import { fetchUserRequest } from './modules/applicant/redux/action';
import { fetchJobsRequest } from './modules/jobs/redux/actions';

import Jobs from './modules/jobs/index';
import Header from './components/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading, } from './modules/jobs/redux/selectors';

function App({ fetchJobsRequest, fetchUserRequest, loading }) {

  useEffect(() => {
    (async function () {
      const firstTime = await localStorage.getItem('firstTime');
      if (firstTime == null) {
        fetchUserRequest(UserData[0])
        fetchJobsRequest(JobsData);
        localStorage.setItem('firstTime', 'firstTime');
      }
    })()
  }, [])

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      {loading ? <div>Loading ...</div> : <Jobs searchQuery={searchQuery} />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading
});

export default connect(mapStateToProps, { fetchJobsRequest, fetchUserRequest })(App);

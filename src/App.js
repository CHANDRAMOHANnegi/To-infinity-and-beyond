import './App.css';
import { useEffect } from 'react';
import { fetchJobs } from './modules/jobs/redux/actions';
import { connect } from 'react-redux';
import JobsData from './data/jobs.json'
import Jobs from './modules/jobs/index';

function App({ fetchJobs }) {

  useEffect(() => {
    fetchJobs(JobsData)
  }, [])
  
  return (
    <div className="App">
      <Jobs />
    </div>
  );
}

export default connect(null, { fetchJobs })(App);

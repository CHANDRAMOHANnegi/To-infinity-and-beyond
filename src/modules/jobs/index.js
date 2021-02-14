import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// 
import { makeSelectJobs } from './redux/selectors';
import Job from './screens/Job';

function Jobs({ jobs }) {
    console.log(jobs);
    return (
        <div>
            {jobs.map(job => <Job job={job} key={job.job_id} />)}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    jobs: makeSelectJobs()
})
export default connect(mapStateToProps, {})(Jobs);
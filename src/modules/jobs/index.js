import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectJobs } from './redux/selectors';
import Job from './screens/Job';
import Tabs from './screens/Tabs';

function Jobs({ jobs }) {
    console.log(jobs);
    return (
        <>
            <div>
                <Tabs />
                <div className="jobs_container">
                    <div className="filters">Filters</div>
                    <div className="jobs_list">
                        {jobs.map(job => <Job job={job} key={job.job_id} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    jobs: makeSelectJobs()
});

export default connect(mapStateToProps, {})(Jobs);
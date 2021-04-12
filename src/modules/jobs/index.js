import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserSavedJobs } from '../applicant/redux/selectors';
import { makeSelectJobs } from './redux/selectors';
import Job from './screens/Job';
import Tabs from './screens/Tabs';

function Jobs({ jobs, userSavedJobs }) {
    // console.log(userSavedJobs, jobs);
    return (
        <>
            <div>
                <Tabs />
                <div className="jobs_container">
                    <div className="filters">Filters</div>
                    <div className="jobs_list">
                        {jobs.map(job => <Job job={job} key={job.job_id} userSavedJobs={userSavedJobs}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    jobs: makeSelectJobs(),
    userSavedJobs: selectUserSavedJobs()
});

export default connect(mapStateToProps, {})(Jobs);
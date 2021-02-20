import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectJobs } from './redux/selectors';

import { saveJobRequest, unSaveJobRequest } from '../applicant/redux/action';

import Job from './screens/Job';
import Tabs from './screens/Tabs';
import { makeSelectSavedJobs } from '../applicant/redux/selectors';

function Jobs({ jobs, saveJobRequest, unSaveJobRequest, savedJobs }) {
    return (
        <div>
            <Tabs />
            <div className="jobs_container">
                <div className="filters">Filters</div>
                <div className="jobs_list">
                    {jobs?.map(job => <Job job={job} key={job.job_id}
                        saveJobRequest={saveJobRequest}
                        unSaveJobRequest={unSaveJobRequest} />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    jobs: makeSelectJobs,
    savedJobs: makeSelectSavedJobs
});

export default connect(mapStateToProps, { saveJobRequest, unSaveJobRequest })(Jobs);
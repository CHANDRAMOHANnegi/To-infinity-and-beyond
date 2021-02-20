import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectJobs } from './redux/selectors';
import { saveJobRequest, unSaveJobRequest } from '../applicant/redux/action';
import Job from './screens/Job';
import { makeSelectSavedJobs } from '../applicant/redux/selectors';

function Jobs({
    alljobs, savedJobs, appliedJobs = [],
    saveJobRequest, unSaveJobRequest,
}) {
    const tabs = ['All Jobs', 'Saved Jobs', 'Applied Jobs'];

    const [currentTab, setCurrentTab] = useState(0);
    const [saved, applied] = [savedJobs, appliedJobs].map(jobs => alljobs.filter(j => jobs.includes(j.job_id)));

    const jobs = [alljobs, saved, applied];

    console.log(jobs);
    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, i) => <div className={"tab"} onClick={() => setCurrentTab(i)} key={tabs[i]}>
                    {tab}
                    <div>{jobs[i].length}</div>
                </div>)}
            </div>
            <div className="jobs_container">
                <div className="filters">Filters</div>
                <div className="jobs_list">
                    {jobs[currentTab]?.map(job => {
                        const isSaved = savedJobs.find((id) => id == job.job_id);
                        return <Job job={job}
                            key={job.job_id}
                            saveJobRequest={saveJobRequest}
                            unSaveJobRequest={unSaveJobRequest}
                            isSaved={isSaved}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    alljobs: makeSelectJobs,
    savedJobs: makeSelectSavedJobs
});

export default connect(mapStateToProps, { saveJobRequest, unSaveJobRequest })(Jobs);
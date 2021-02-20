import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectJobs, makeSelectFilters } from './redux/selectors';
import { saveJobRequest, unSaveJobRequest } from '../applicant/redux/action';
import Job from './screens/Job';
import { makeSelectSavedJobs, } from '../applicant/redux/selectors';
import Filter from '../../components/Filter';
import { updateFilterRequest } from './redux/actions'

function Jobs({
    alljobs, savedJobs, appliedJobs = [],
    saveJobRequest, unSaveJobRequest,
    updateFilterRequest, appliedFilters
}) {
    const tabs = ['All Jobs', 'Saved Jobs', 'Applied Jobs'];

    const [currentTab, setCurrentTab] = useState(0);

    const [jobs, setJobs] = useState(alljobs);

    useEffect(() => {
        const { job_type, job_location } = appliedFilters;
        const newJobs = alljobs.filter(job => {
            return (job_location == "All" || job.job_location == job_location)
                && (job_type == "All" || job.job_type == job_type)
        });

        console.log(appliedFilters, newJobs);
        setJobs(newJobs);
    }, [appliedFilters]);


    const [saved, applied] = [savedJobs, appliedJobs].map(jobs => alljobs.filter(j => jobs.includes(j.job_id)));
    const currentJobs = [jobs, saved, applied];

    console.log(currentJobs);

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, i) => (
                    <div className={"tab"} style={{ backgroundColor: currentTab == i ? 'red' : "orange" }}
                        onClick={() => setCurrentTab(i)} key={tabs[i]}>
                        <div style={{}}> {tab}</div>
                        <div>{currentJobs[i].length}</div>
                    </div>))
                }
            </div>
            <div className="jobs_container">
                <Filter updateFilterRequest={updateFilterRequest} appliedFilters={appliedFilters} />
                <div className="jobs_list">
                    {currentJobs[currentTab]?.map(job => {
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
    savedJobs: makeSelectSavedJobs,
    appliedFilters: makeSelectFilters
});

export default connect(mapStateToProps, { saveJobRequest, unSaveJobRequest, updateFilterRequest })(Jobs);
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectJobs, makeSelectFilters } from './redux/selectors';
import { saveJobRequest, unSaveJobRequest, applyJobRequest } from '../applicant/redux/action';
import Job from './screens/Job';
import { makeSelectSavedJobs, makeSelectUserApplications, } from '../applicant/redux/selectors';
import Filter from '../../components/Filter';
import { updateFilterRequest, } from './redux/actions'
import Modal from '../../components/Modal';
import { filterSearch } from './helpers.js';

function Jobs({
    alljobs, savedJobs, appliedJobs = [],
    saveJobRequest, unSaveJobRequest,
    updateFilterRequest, appliedFilters, applyJobRequest,
    searchQuery = ""
}) {
    const tabs = ['All Jobs', 'Saved Jobs', 'Applied Jobs'];
    const [currentTab, setCurrentTab] = useState(0);
    const [jobs, setJobs] = useState(alljobs);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const newJobs = filterSearch(alljobs, appliedFilters, searchQuery);
        setJobs(newJobs);
    }, [appliedFilters, alljobs, searchQuery]);

    const onClose = () => {
        setIsOpen(false)
    }

    const [saved, applied] = [savedJobs, appliedJobs].map(job => jobs.filter(j => job.includes(j.job_id)));
    const currentJobs = [jobs, saved, applied];

    console.log(alljobs);

    return (
        <>
            <div className="tabs">
                {tabs.map((tab, i) => (
                    <div className={"tab"} style={{
                        backgroundColor: currentTab == i ? '#ffca70' : "white",
                        color: currentTab == i ? 'white' : "black"
                    }}
                        onClick={() => setCurrentTab(i)} key={tabs[i]}>
                        <div style={{}}> {tab}</div>
                        <div>{currentJobs[i].length}</div>
                    </div>))
                }
            </div>
            <div className="jobs_container">
                <Filter updateFilterRequest={updateFilterRequest} appliedFilters={appliedFilters} />
                <div className="jobs_list">
                    {currentJobs[currentTab].length > 0 ? currentJobs[currentTab].map(job => {
                        const [isSaved, isApplied] = [savedJobs, appliedJobs].map(jo => jo.find((id) => id == job.job_id));
                        return <Job job={job}
                            key={job.job_id}
                            saveJobRequest={saveJobRequest}
                            unSaveJobRequest={unSaveJobRequest}
                            isSaved={isSaved}
                            isApplied={isApplied}
                            applyJobRequest={applyJobRequest}
                            setIsOpen={setIsOpen}
                        />
                    }) :
                        <div style={{
                            textAlign: "center"
                        }}>No jobs found</div>
                    }
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} applyJobRequest={applyJobRequest} appliedJobs={appliedJobs} />
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    alljobs: makeSelectJobs,
    savedJobs: makeSelectSavedJobs,
    appliedJobs: makeSelectUserApplications,
    appliedFilters: makeSelectFilters
});

export default connect(mapStateToProps, { saveJobRequest, unSaveJobRequest, updateFilterRequest, applyJobRequest })(Jobs);
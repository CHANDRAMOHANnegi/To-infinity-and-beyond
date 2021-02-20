import React from 'react';
import { BookmarkBorderOutlined, Bookmark } from '@material-ui/icons';

function Job({ job, isSaved, unSaveJobRequest, saveJobRequest }) {

    const {
        job_id,
        job_name,
        type,
        date_created,
        skill_required,
        location,
        job_type,
        job_descrition
    } = job;

    const toggleBookMark = () => {
        isSaved ? saveJobRequest(job_id) : unSaveJobRequest(job_id)
    }

    return (
        <div className="job" style={{ position: "relative" }}>
            <div style={{
                position: "absolute",
                right: 0,
                top: -5,
            }}> <div onClick={toggleBookMark}>{isSaved ? <BookmarkBorderOutlined >save</BookmarkBorderOutlined>
                : <Bookmark>save</Bookmark>}</div>
            </div>
            <div className="job_title"><div>{job_name}</div><div>{job_type}</div></div>
            <div>{location}</div>
            <div><p>{job_descrition}</p></div>
            <div className="skills">
                <ul>
                    {skill_required.map(skill => <li key={skill} ><span className="skill">{skill}</span></li>)}
                </ul>
            </div>
        </div >
    );
}

export default Job
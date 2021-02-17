import React from 'react';

function Job({ job }) {

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

    return (
        <div className="job">
            <button>save</button>
            <div className="job_title"><div>{job_name}</div><div>{job_type}</div></div>
            <div>{location}</div>
            <div><p>{job_descrition}</p></div>
            <div className="skills"><ul>{skill_required.map(skill => <li><span className="skill">{skill}</span></li>)}</ul></div>
        </div>
    );
}

export default Job;
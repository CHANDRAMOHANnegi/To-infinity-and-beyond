import React from 'react';
import { BookmarkBorderOutlined, Bookmark } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveJobRequest } from '../../applicant/redux/action';
import { makeSelectIsSavedJob } from '../../applicant/redux/selectors';
import { createStructuredSelector } from 'reselect';

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
        <div className="job" style={{ position: "relative" }}>
            <div style={{
                position: "absolute",
                right: 0,
                top: -5,
            }}> {true ? <BookmarkBorderOutlined>save</BookmarkBorderOutlined>
                : <Bookmark>save</Bookmark>}</div>
            <div className="job_title"><div>{job_name}</div><div>{job_type}</div></div>
            <div>{location}</div>
            <div><p>{job_descrition}</p></div>
            <div className="skills"><ul>{skill_required.map(skill => <li><span className="skill">{skill}</span></li>)}</ul></div>
        </div >
    );
}
const mapStateToProps = createStructuredSelector({
    isSaved: makeSelectIsSavedJob()
});
export default connect(mapStateToProps, { saveJobRequest })(Job);
import React from 'react';
import { BookmarkBorderOutlined, Bookmark } from '@material-ui/icons';

function Job({
    job: {
        job_id,
        job_name,
        skill_required,
        job_location,
        job_type,
        job_descrition, company,
    }, isSaved, isApplied, unSaveJobRequest, saveJobRequest, applyJobRequest }) {

    const toggleBookMark = () => {
        isSaved ? unSaveJobRequest(job_id) : saveJobRequest(job_id)
    }

    return (
        <div className="job" style={{ position: "relative" }}>
            <div style={{
                position: "absolute",
                right: 0,
                top: -5,
                cursor: "pointer"
            }}> <div onClick={toggleBookMark}>
                    {isSaved ?
                        <Bookmark>save</Bookmark> :
                        <BookmarkBorderOutlined >save</BookmarkBorderOutlined>}
                </div>
            </div>
            <div className="job_title"><div>{job_name}</div><div>{job_type}</div></div>
            <div>{`Location : ${job_location}`}</div>
            <div>{`Company : ${company}`}</div>
            <div><p>{job_descrition}</p></div>
            <div className="skills">
                <div style={{ marginRight: '10px' }}>Skills :</div>
                <div>
                    <ul>
                        {skill_required.map(skill => <li key={skill} ><span className="skill">{skill}</span></li>)}
                    </ul>
                </div>
            </div>
            {isApplied ? <div style={{ border: '2px solid #ffca70', width: '100px', textAlign: "center" }}>Applied</div> : <button style={{
                border: '2px solid #ffca70', width: '100px', textAlign: "center"
            }}
                onClick={() => applyJobRequest(job_id)}
            >Apply</button>}
        </div >
    );
}

export default Job
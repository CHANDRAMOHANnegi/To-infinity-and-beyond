import React from 'react';
import { BookmarkBorderOutlined, Bookmark } from '@material-ui/icons';

function Job({
    job, isSaved, isApplied, unSaveJobRequest, saveJobRequest, applyJobRequest, setIsOpen }) {
    const {
        job_id,
        job_name,
        skill_required,
        job_location,
        job_type,
        job_descrition, company,
    } = job;

    const toggleBookMark = () => {
        isSaved ? unSaveJobRequest(job_id) : saveJobRequest(job_id)
    }

    return (
        <>
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
                <div className={"apply_button_container"}>
                    {isApplied ?
                        <div className={'applied'}>Applied</div> :
                        <button
                            className={'apply_button'}
                            onClick={() => applyJobRequest(job_id)}
                        >Apply</button>}
                    <div><button onClick={() => setIsOpen(job)} className={'job_detail'}>Job Detail</button></div>
                </div>
            </div >
        </>);
}

export default Job
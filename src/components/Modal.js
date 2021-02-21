import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '50px',
    zIndex: 1000,
    backgroundColor: "#fff"
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

function Modal({ isOpen, onClose, applyJobRequest, appliedJobs }) {

    console.log(appliedJobs, isOpen);
    if (!isOpen) return null;

    const {
        job_id,
        job_name,
        skill_required,
        job_location,
        job_type,
        job_descrition, company,
        date_created,
        no_of_positions, salary
    } = isOpen;

    const isApplied = appliedJobs.find(id => id == isOpen.job_id)

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} >
                <div style={MODAL_STYLE} className={"modal"}>
                    <button onClick={onClose} style={{ position: "absolute", top: '10px', right: '10px' }}>Close</button>
                    <div>
                        <div className={'list-item'}><div className={"heading"}>Designation </div> {job_name}</div>
                        <div className={'list-item'}><div className={"heading"}>Company </div> {company}</div>
                        <div className={'list-item'}><div className={"heading"}>Location :</div> {job_location}</div>
                        <div className={'list-item'}><div className={"heading"}>Job type :</div> {job_type}</div>
                        <div className="skills list-item">
                            <div style={{ marginRight: '10px', fontWeight: 'bold' }}>Skills </div>
                            <div>
                                <ul>
                                    {skill_required.map(skill => <li key={skill} ><span className="skill">{skill}</span></li>)}
                                </ul>
                            </div>
                        </div>
                        <div className={''}><div className={'heading'}>Description</div><p>{job_descrition}</p></div>
                        <div className={'list-item'}><div className={"heading"}>Salary </div> {salary}</div>
                        <div className={'list-item'}><div className={"heading"}>Job created on </div> {date_created}</div>
                        <div className={'list-item'}><div className={"heading"}>No of Positions </div> {no_of_positions}</div>
                    </div>
                    <div className={'apply_button_container'}>
                        {!isApplied ? <button className={'apply_button'}
                            onClick={() => {
                                applyJobRequest(job_id);
                            }}
                        >Apply</button> : <div className={"applied"}>Applied</div>}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default Modal;
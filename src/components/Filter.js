import React, { useState } from 'react';
import ReactSelect from 'react-select';

function Filter(props) {

    const [applyPreferences, togglePreferences] = useState(true);

    const [preferences, setPreferences] = useState({
        job_type: "All",
        location: "All"
    });

    const jobTypeOption = [
        { label: "All", value: "All" },
        { label: "Full-time", value: "Full-time" },
        { label: 'Internship', value: 'Internship' },
        { label: "Part-time", value: "Part-time" },
        { label: 'Contract', value: 'Contract' },
    ];

    const jobLocationOption = [
        { label: "All", value: "All" },
        { label: "Earth", value: "Earth" },
        { label: 'Mars', value: 'Mars' },
        { label: "Moon", value: "Moon" },
        { label: 'Krypton', value: 'Krypton' },
        { label: 'Titan', value: 'Titan' },
    ];

    const themeselect = theme => ({
        ...theme,
        borderRadius: 1,
        colors: {
            ...theme.colors,
            primary25: 'rgb(202, 206, 208)',
            primary: '#ffca70',
        },
    });

    return (
        <div>
            <div className={"preferences"}>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div>
                        <input type="checkbox" onChange={() => togglePreferences(!applyPreferences)} checked={applyPreferences} />
                    </div>
                    <div>Preferences</div></div>
                <div>
                    <div>
                        <div>Job type</div>
                        <ReactSelect
                            name={"job_type"}
                            disableUnderline={true}
                            onChange={(opt) =>
                                setPreferences({
                                    ...preferences,
                                    job_type: opt.value,
                                })}
                            value={jobTypeOption.find(el => el.value === preferences.job_type)}
                            options={jobTypeOption}
                            theme={themeselect}
                        />
                    </div>


                    <div>
                        <div>Location</div>
                        <ReactSelect
                            name={"job_type"}
                            disableUnderline={true}
                            onChange={(opt) =>
                                setPreferences({
                                    ...preferences,
                                    location: opt.value,
                                })}
                            value={jobLocationOption.find(el => el.value === preferences.location)}
                            options={jobLocationOption}
                            theme={themeselect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
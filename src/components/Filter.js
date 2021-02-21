import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';

function Filter({ updateFilterRequest, appliedFilters }) {

    const defaultFilters = {
        job_type: "All",
        job_location: "All",
        company: "All"
    }
    const [preferences, setPreferences] = useState(appliedFilters);

    const jobTypeOption = [
        { label: "All", value: "All" },
        { label: "Full-time", value: "Full-time" },
        { label: 'Internship', value: 'Internship' },
        { label: "Part-time", value: "Part-time" },
    ];

    const jobLocationOption = [
        { label: "All", value: "All" },
        { label: "Earth", value: "Earth" },
        { label: 'Mars', value: 'Mars' },
        { label: "Moon", value: "Moon" },
    ];

    const companyOption = [
        { label: "All", value: "All" },
        { label: "SOFTWARE", value: "SOFTWARE" },
        { label: "HEALTHCARE", value: "HEALTHCARE" },
        { label: 'SPACE-FORCE', value: 'SPACE-FORCE' },
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

    const handleChange = (opt, key) => {
        const newPreferences = {
            ...preferences,
            [key]: opt.value,
        }
        setPreferences(newPreferences);
        updateFilterRequest(newPreferences)
    }

    // useEffect(() => {
    //     setPreferences(appliedFilters)
    // }, [])

    return (
        <div className={"filters"}>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                {/* <div>
                    <input type="checkbox" onChange={() => togglePreferences(!applyPreferences)} checked={applyPreferences} />
                </div> */}
                <div>Filters</div>
            </div>
            <div style={{ margin: '10px' }}>
                <div className={'filter'}>
                    <div>Job type</div>
                    <ReactSelect
                        name={"job_type"}
                        disableUnderline={true}
                        onChange={(opt) => handleChange(opt, 'job_type')}
                        value={jobTypeOption.find(el => el.value === preferences.job_type)}
                        options={jobTypeOption}
                        theme={themeselect}
                    />
                </div>

                <div className={'filter'}>
                    <div>Location</div>
                    <ReactSelect
                        name={"job_location"}
                        disableUnderline={true}
                        onChange={(opt) => handleChange(opt, 'job_location')}
                        value={jobLocationOption.find(el => el.value === preferences.job_location)}
                        options={jobLocationOption}
                        theme={themeselect}
                    />
                </div>

                <div className={'filter'}>
                    <div>Company</div>
                    <ReactSelect
                        name={"company"}
                        disableUnderline={true}
                        onChange={(opt) => handleChange(opt, 'company')}
                        value={companyOption.find(el => el.value === preferences.company)}
                        options={companyOption}
                        theme={themeselect}
                    />
                </div>
            </div>

            <div style={{ textAlign: "center", }}><button style={{ border: "1px solid #ffca70", backgroundColor: "white", padding: '10px' }}
                onClick={() => {
                    setPreferences(defaultFilters);
                    updateFilterRequest(defaultFilters);
                }}
            >Clear filters</button></div>

        </div>
    );
}

export default Filter;
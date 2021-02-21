
/**
 * 
 * params { allJobs , appliedFilters , searchQuery }
 * 
 * this function return new jobs with filter apllied and search query applied
 * 
 * */

export const filterSearch = (alljobs = [], appliedFilters, searchQuery) => {

    const { job_type, job_location, company } = appliedFilters;
    const filteredJobs = alljobs.filter(job => {
        return (job_location == "All" || job.job_location == job_location)
            && (job_type == "All" || job.job_type == job_type)
            && (company == "All" || job.company == company)
    });

    const searchedJobs = (searchQuery && searchQuery.length > 0)
        ? filteredJobs.filter(job => {
            const searchInLocation = job.job_location.toLowerCase()
                .includes(searchQuery.toLowerCase());

            const searchInCompany = job.company.toLowerCase()
                .includes(searchQuery.toLowerCase());

            const searchInSkills = job.skills.find(skill => skill.toLowerCase()
                .includes(searchQuery.toLowerCase()))

            if (searchInLocation || searchInCompany || searchInSkills) {
                return job;
            }
        }) : filteredJobs;

    return searchedJobs;
}
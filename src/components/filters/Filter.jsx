import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Filter.css";

const Filter = () => {
  const rolesOptions = [
    { title: "Backend", year: 1994 },
    { title: "Frontend", year: 1972 },
    { title: "Fullstack", year: 1974 },
    { title: "IOS", year: 2008 },
    { title: "Flutter", year: 1957 },
    { title: "React Native", year: 1993 },
    { title: "Android", year: 1994 },
    { title: "Frontend", year: 1994 },
    { title: "Tech Lead", year: 1994 },
  ];
  
  const employeeOptions = [
    { title: "1-10", selected: false },
    { title: "11-20", selected: false },
    { title: "21-50", selected: false },
    { title: "51-100", selected: false },
    { title: "101-200", selected: false },
    { title: "201-500", selected: false },
    { title: "500+", selected: false },
  ];
  
  const experienceOptions = [
    { title: "1", selected: false },
    { title: "2", selected: false },
    { title: "3", selected: false },
    { title: "4", selected: false },
    { title: "5", selected: false },
    { title: "6", selected: false },
    { title: "7", selected: false },
    { title: "8", selected: false },
    { title: "9", selected: false },
    { title: "10", selected: false },
  ];
  
  const remoteOptions = [
    { title: "Remote", selected: false },
    { title: "Hybrid", selected: false },
    { title: "In-office", selected: false },
  ];
  
  const salaryOptions = [
    { title: "1L", selected: false },
    { title: "10L", selected: false },
    { title: "20L", selected: false },
    { title: "30L", selected: false },
    { title: "40L", selected: false },
    { title: "50L", selected: false },
    { title: "60L", selected: false },
    { title: "70L", selected: false },
  ];
  
  return (
    <div className="filters">
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputRole"
          multiple
          id="tags-outlined"
          options={rolesOptions}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} placeholder="Roles" />
          )}
        />
      </div>
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputEmployee"
          multiple
          id="tags-outlined"
          options={employeeOptions}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} placeholder="Number of Employees" />
          )}
        />
      </div>
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputExperience"
          id="country-customized-option-demo"
          options={experienceOptions}
          getOptionLabel={(option) => `${option.title}`}
          renderInput={(params) => (
            <TextField {...params} placeholder="Experience" />
          )}
        />
      </div>
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputRemote"
          multiple
          id="tags-outlined"
          options={remoteOptions}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} placeholder="Remote" />
          )}
        />
      </div>
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputSalary"
          id="country-customized-option-demo"
          options={salaryOptions}
          getOptionLabel={(option) => `${option.title}`}
          renderInput={(params) => (
            <TextField
              {...params}
              // label="Minimum Base Pay Salary"
              placeholder="Minimum Base Pay Salary"
            />
          )}
        />
      </div>
      <div className="filter-row">
        <TextField
          size="small"
          placeholder="Search Company Name"
          className="searchBar"
        />
      </div>
    </div>
  );
};

export default Filter;

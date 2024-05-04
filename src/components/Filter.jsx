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
    { title: "1-10", year: 1994 },
    { title: "11-20", year: 1972 },
    { title: "21-50", year: 1974 },
    { title: "51-100", year: 2008 },
    { title: "101-200", year: 1957 },
    { title: "201-500", year: 1993 },
    { title: "500+", year: 1994 },
  ];
  const experienceOptions = [
    { title: "1", year: 1994 },
    { title: "2", year: 1972 },
    { title: "3", year: 1974 },
    { title: "4", year: 2008 },
    { title: "5", year: 1957 },
    { title: "6", year: 1993 },
    { title: "7", year: 1994 },
    { title: "8", year: 1994 },
    { title: "9", year: 1994 },
    { title: "10", year: 1994 },
  ];
  const remoteOptions = [
    { title: "Remote", year: 1994 },
    { title: "Hybrid", year: 1972 },
    { title: "In-office", year: 1974 },
  ];
  const salaryOptions = [
    { title: "1L", year: 1994 },
    { title: "10L", year: 1972 },
    { title: "20L", year: 1974 },
    { title: "30L", year: 1974 },
    { title: "40L", year: 1974 },
    { title: "50L", year: 1974 },
    { title: "60L", year: 1974 },
    { title: "70L", year: 1974 },
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

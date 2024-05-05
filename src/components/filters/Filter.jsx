import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Filter.css";

const Filter = ({ data, applyFilter,filterObject,setFilterObject }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedRemote, setSelectedRemote] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const rolesOptions = [
    { title: "Backend" },
    { title: "Frontend" },
    { title: "Fullstack" },
    { title: "IOS" },
    { title: "Flutter" },
    { title: "React Native" },
    { title: "Android" },
    { title: "React" },
    { title: "Tech Lead" },
  ];

  const employeeOptions = [
    { title: "1-10", minEmp: '1', maxEmp: '10' },
    { title: "11-20", minEmp: '11', maxEmp: '20' },
    { title: "21-50", minEmp: '21', maxEmp: '50' },
    { title: "51-100", minEmp: '51', maxEmp: '100' },
    { title: "101-200", minEmp: '101', maxEmp: '200' },
    { title: "201-500", minEmp: '201', maxEmp: '500' },
    { title: "500+", minEmp: '500' },
  ];  

  const experienceOptions = [
    { title: 1 },
    { title: 2 },
    { title: 3 },
    { title: 4 },
    { title: 5 },
    { title: 6 },
    { title: 7 },
    { title: 8 },
    { title: 9 },
    { title: 10 },
  ];

  const remoteOptions = [
    { title: "Remote" },
    { title: "Hybrid" },
    { title: "In-office" },
  ];

  const salaryOptions = [
    { title: 10, currencyCode:"USD" },
    { title: 20, currencyCode:"USD" },
    { title: 30, currencyCode:"USD" },
    { title: 40, currencyCode:"USD" },
    { title: 50, currencyCode:"USD" },
    { title: 60, currencyCode:"USD" },
    { title: 70, currencyCode:"USD" },
    { title: 80, currencyCode:"USD" },
  ];
  const updateInput = (inputType, inputValue) => {
    let updatedFilterObject = {...filterObject};
    if (inputType === "roles") {
      setSelectedRoles(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "roles": inputValue,
      };
    } else if (inputType === "emp") {
      setSelectedEmployees(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "emp": inputValue,
      };
    } else if (inputType === "exp") {
      setSelectedExperience(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "exp": inputValue,
      };
    } else if (inputType === "remote") {
      setSelectedRemote(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "remote": inputValue,
      };
    } else if (inputType === "salary") {
      setSelectedSalary(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "salary": inputValue,
      };
    } else if (inputType === "companyName") {
      setCompanyName(inputValue);
      updatedFilterObject = {
        ...updatedFilterObject,
        "searchInput": inputValue,
      };
    }
    setFilterObject(updatedFilterObject);
  };
  
  return (
    <div className="filters">
      <div className="filter-row">
        <Autocomplete
          size="small"
          className="chipsInputRole"
          multiple
          id="tags-outlined"
          options={rolesOptions}
          value={selectedRoles}
          onChange={(event, newValue) => {
            updateInput("roles", newValue);
          }}
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
          value={selectedEmployees}
          onChange={(event, newValue) => {
            updateInput("emp", newValue);
          }}
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
          value={selectedExperience}
          onChange={(event, newValue) => {
            updateInput("exp", newValue);
          }}
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
          value={selectedRemote}
          onChange={(event, newValue) => {
            updateInput("remote", newValue);
          }}
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
          value={selectedSalary}
          onChange={(event, newValue) => {
            updateInput("salary", newValue);
          }}
          getOptionLabel={(option) => `${option.title} ${option.currencyCode}`}
          renderInput={(params) => (
            <TextField {...params} placeholder="Minimum Base Pay Salary" />
          )}
        />
      </div>
      <div className="filter-row">
        <TextField
          size="small"
          placeholder="Search Company Name"
          className="searchBar"
          value={companyName}
          onChange={(e) => {
            updateInput("companyName", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;

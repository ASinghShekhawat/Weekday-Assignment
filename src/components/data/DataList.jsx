import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./DataList.css";
import Filter from "../filters/Filter";
import Card from "../elements/Card";
import { useDispatch } from "react-redux";
import { setToast, setToastMessage } from "../../redux/slicers/TriggerSlice";
function DataList() {
  const [offset, setOffset] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true); // Flag to track initial load
  const [filterObject, setFilterObject] = useState({}); // Flag to track initial load
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false); // Update flag to false after initial load
    } else {
      fetchData(); // Call fetchData only after initial load
    }
  }, [initialLoad]);
  useEffect(() => {
    applyFilter(initialData);
  }, [filterObject]);
  const applyFilter = (data) => {
    let filteredData = [...data]; // Start with the initial data
    
    // Apply roles filter if present
    if (filterObject.roles) {
      filteredData = rolesFiltering(filteredData, filterObject.roles);
    }
  
    // Apply experience filter if present
    if (filterObject.exp) {
      filteredData = experienceFiltering(filteredData, filterObject.exp);
    }
    
    if (filterObject.remote) {
      filteredData = remoteFiltering(filteredData, filterObject.remote);
    }
    if (filterObject.salary) {
      filteredData = salaryFiltering(filteredData, filterObject.salary);
    }
    if (filterObject.searchInput) {
      filteredData = nameFiltering(filteredData, filterObject.searchInput);
    }
    setCurrentData(filteredData);
  };
  
  const rolesFiltering = (data, roles) => {
    if (roles.length === 0) {
      return data; // Return the data unchanged if no roles filter
    }
    
    return data.filter(job => roles.some(role => job.jobRole.trim().toLowerCase() === role.title.trim().toLowerCase()));
  };
  
  const experienceFiltering = (data, experience) => {
    if (!experience) {
      return data; // Return the data unchanged if no experience filter
    }
    
    return data.filter(job => (job.minExp && job.minExp <= experience.title) && (job.maxExp && job.maxExp >= experience.title));
  };
  const remoteFiltering = (data, locations) => {
    if (locations.length === 0) {
      return data; // Return the data unchanged if no Remote jobs filter
    }
    
    return data.filter(job => locations.some(role => job.location.trim().toLowerCase() === role.title.trim().toLowerCase()));
  };
  const salaryFiltering = (data, salary) => {
    if (!salary) {
      return data; // Return the data unchanged if no experience filter
    }
    
    return data.filter(job => (job.maxJdSalary && job.maxJdSalary >= salary.title && job.salaryCurrencyCode === salary.currencyCode));
  };
  const nameFiltering = (data, name) => {
    if (name === "") {
      return data; // Return the data unchanged if name is empty
    }
    
    return data.filter(job => job.companyName.trim().toLowerCase().includes(name.trim().toLowerCase()));
  };
  const fetchData = () => {
    // Method to retrieve the data
    const data = {
      limit: 10,
      offset: offset,
    };
  
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", data)
      .then((res) => {
        if (res.status === 200) {
          const newData = res.data.jdList.filter(
            (newItem) => !currentData.some((item) => item === newItem)
          ); // Filter out items already present in currentData
          setOffset((prevOffset) => prevOffset + 1);
          setCurrentData((prevData) => [...prevData, ...newData]);
          setInitialData((prevData) => [...prevData, ...newData]); // Update initial data
          applyFilter([...initialData,...newData]);
  
          if (offset === 0) {
            dispatch(setToast(true));
            dispatch(
              setToastMessage(["success", "Data retrieved successfully"])
            );
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch(setToastMessage(["error", "Error fetching data"]));
      })
  };
  

  return (
    <div className="container">
      <div className="filtering">
        <Filter
          data={currentData}
          applyFilter={applyFilter}
          filterObject={filterObject}
          setFilterObject={setFilterObject}
        />
      </div>
      <InfiniteScroll
        dataLength={currentData.length}
        next={fetchData}
        hasMore={true}
        loader={currentData.length === 0 ? <h4>No Data Found</h4> : <h4>Loading...</h4>}
        endMessage={<p>End of results</p>}
      >
      <div className="cardContainer">
        {currentData.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
      </InfiniteScroll>
    </div>
  );
}

export default DataList;

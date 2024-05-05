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
  const [initialLoad, setInitialLoad] = useState(true); // Flag to track initial load
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false); // Update flag to false after initial load
    } else {
      fetchData(); // Call fetchData only after initial load
    }
  }, [initialLoad]);

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
          if(offset === 0){
          dispatch(setToast(true));
          dispatch(setToastMessage(["success", "Data retrieved successfully"]));
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch(setToastMessage(["error", "Error fetching data"]));
      });
  };

  return (
    <div className="container">
      <div className="filtering">
        <Filter />
      </div>
      <InfiniteScroll
        dataLength={currentData.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
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

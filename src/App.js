import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Card from './components/Card';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [offset, setOffset] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = {
      "limit": 10,
      "offset": offset
    };

    axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", data)
      .then((res) => {
        if (res.status === 200) {

          setCurrentData(res.data.jdList);
          setOffset(prev => prev + 1);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className='container' ref={containerRef}>
      <div className='filtering'>
        <Filter />
      </div>
      <div className='cardContainer'>
        {currentData.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

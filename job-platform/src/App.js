import {  useState, useEffect, Fragment } from 'react';
import './App.css';
import { Filter } from './components/filter/filter';
import { JobListPage } from './components/page/jobListing';

function App() {

  const [data, setData] = useState(null);

  useEffect(()=>{

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const body = JSON.stringify({
     "limit": 10,
     "offset": 0
    });
    
    const requestOptions = {
     method: "POST",
     headers: myHeaders,
     body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
     .then((response) => response.json())
     .then((result) => setData(result))
     .catch((error) => console.error(error));
    
  },[])

  console.log(data);

  return (
    <Fragment>
      <Filter />
      {data && <JobListPage jdList={data.jdList}/>}
    </Fragment>
      
  );
}

export default App;

import {  useState, useEffect } from 'react';
import './App.css';
import { Filter } from './components/filter/filter';
import { JobListPage } from './components/page/jobListing';
import { useSelector,useDispatch } from 'react-redux';
import { setFetchedData, setFilteredData } from './features/slice';
import InfiniteScroll from "react-infinite-scroll-component";
import { filterJobs } from './components/filter/filter';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

function Home() {

  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(10);

  const data = useSelector((state)=>(state.jdState))
  const filteredData = useSelector((state)=>(state.filteredState))
  const filters = useSelector((state)=>(state.filters))

  const dispatch = useDispatch();

   const fetchMoreData = async (filters) => {

      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        const body = JSON.stringify({
          "limit": 10,
          "offset": index,
        });
  
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };
  
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const res = await response.json();
        
        // setData(result);
        const newData = {...data,jdList:[...data.jdList,...res.jdList]}
        //set state for original fetched data
        dispatch(setFetchedData(newData));
        //set state for filtered data
        const filterData = filterJobs(filters , newData.jdList)
        dispatch(setFilteredData(filterData))
        res.jdList.length > 0 ? setHasMore(true) : setHasMore(false);
        console.log('hasMore',hasMore)
      } catch (error) {
        console.error(error);
      }

    setIndex((prevIndex) => prevIndex + 10);
    console.log("more data fetched")
  };

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        const body = JSON.stringify({
          "limit": 10,
          "offset": 0,
        });
  
        const requestOptions = {
          //this API does not allow for GET call rather POST
          method: "POST",
          headers: myHeaders,
          body
        };
  
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        console.log(result)
        dispatch(setFetchedData(result))
        dispatch(setFilteredData(result))
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()}, []);

  console.log('setData', data, filteredData);

  return (
    <InfiniteScroll
      dataLength={filteredData.jdList.length}
      next={()=>fetchMoreData(filters)}
      hasMore= {hasMore} >
    <div className='app'>
      <Filter />
      {filteredData  && <JobListPage jdList={filteredData.jdList}/>}

       {hasMore ? " ": 
       ( filteredData.jdList.length===0 ? 
          <span style={{display:'flex', justifyContent:'center', margin:'2rem', fontSize:"2rem"}}>
            <ManageSearchOutlinedIcon sx={{fontSize:'2rem'}}/> No matching results 
            </span>
          :
          <span style={{display:'flex', justifyContent:'center', margin:'2rem', fontSize:"2rem"}}>
            That's all for now...
            </span>)
       }
    </div> 
    </InfiniteScroll>
         
  );
}

export default Home;

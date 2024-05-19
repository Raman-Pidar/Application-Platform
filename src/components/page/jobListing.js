import './jobListing.css';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import { JobCard } from './card/card';


export const JobListPage=(prop)=>{
    const list = prop.jdList
console.log("joblistpage" ,prop)
    return (
          <div className='flexContainer'>
                {list && list.map((jd)=>
                <JobCard jd={jd}/>

                )}
                {list.length===0?
                <h1>
                <ManageSearchOutlinedIcon sx={{fontSize:'2rem'}}/> No matching results 
                </h1>
                :""}
          </div>
         
      );
}
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
                <span style={{display:'flex', justifyContent:'center', margin:'2rem', fontSize:"2rem"}}>
                <ManageSearchOutlinedIcon sx={{fontSize:'2rem'}}/> No matching results 
                </span>
                :""}
          </div>
         
      );
}
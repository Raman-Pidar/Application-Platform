import './jobListing.css';
import { JobCard } from './card/card';


export const JobListPage=(prop)=>{
    const list = prop.jdList
console.log("joblistpage" ,prop)
    return (
          <div className='flexContainer'>
                {list && list.map((jd)=>
                        <JobCard jd={jd}/>
                    
                )}
          </div>
         
      );
}
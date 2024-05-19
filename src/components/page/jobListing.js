import Grid from '@mui/material/Grid';
import './jobListing.css';
import { JobCard } from './card/card';


export const JobListPage=(prop)=>{
    const list = prop.jdList
console.log("joblistpage" ,prop)
    return (
        //   <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4} key="scxs">
          <div className='flexContainer'>
                {list && list.map((jd)=>
                    // <Grid item xs={12} sm={6} md={4} key={jd.jdUid} >
                        <JobCard jd={jd}/>
                    //</Grid>
                    
                )}
          </div>
         // </Grid>
         
      );
}
import { JobCard } from './card/card'


export const JobListPage=(prop)=>{
    const list = prop.jdList

    return (
        <div>
          {list.map((jd)=>{
            return(
              <div>
                <JobCard />
              </div>
            )
          })}
        </div>
      );
}
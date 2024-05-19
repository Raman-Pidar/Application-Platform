import './filter.css'
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

import { useDispatch } from 'react-redux';
import {  handleFilterChange} from '../../features/slice'

// filter out jds based on filters
export const filterJobs = (filters, jdList) => {
    console.log(filters,jdList)
    const filteredArray = jdList.filter(job => {
      // Check roles
      if (filters.roles.length && !filters.roles.some(filter => filter.value === job.jobRole.toLowerCase()))
        {
        return false;
      }
      // Check numOfEmployees (the remote property is not coming in JSON response so just wrote placeholder)
      // Assuming numOfEmployees filter to be a range like "0-10", "10-20"
      //if (filters.numOfEmployees.length) {
        // if (job.numOfEmployees && !filters.numOfEmployees.some(range => checkRange(job.numOfEmployees, range))) {
        //   return false;
        // }
     // }

      // Check minExp 
      if (filters.minExp && !(filters.minExp <=(job.maxExp) && (filters.minExp >=(job.minExp)))) {
        return false;
      }
      // Check remote (the remote property is not coming in JSON response so just wrote placeholder)
      // if (filters.remote.length && !filters.remote.includes(job.remote.toLowerCase())) {
      //   return false;
      // }
      // Check location
      if (filters.location.length && 
        !filters.location.some(filter => filter.value === job.location.toLowerCase())) 
      {
        return false;
      }
      // Check minJdSalary
      if (filters.minJdSalary && !(filters.minJdSalary.replace(" L","") <=(job.maxJdSalary))
    ) {
        console.log("min filteer Salary",filters.minJdSalary ,"max JDSalary", (job.maxJdSalary) ,"min JDSalary", (job.minJdSalary))
        return false;
      }
      // Check companyName
      if (filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
        return false;
      }
      // All conditions met, include this job in the filtered array
      return true;
    });
    return {jdList: filteredArray}
  };

export const Filter=()=>{

    const dispatch = useDispatch();
    
    return (

        <Stack useFlexGap flexWrap="wrap"
        direction='row' justifyContent='flex-start'
        alignItems="center" spacing={1}  mb={4}
        >
        <Autocomplete  sx={{ flexGrow:'1', minWidth:'7rem'}}
            multiple
            onChange={(e, value) =>dispatch(handleFilterChange({filterName:'roles', value})) }
            id="tags-outlined"
            options={ 
                      [
                      { label: 'Frontend', value: 'frontend' },
                      { label: 'IOS', value: 'ios' },
                      { label: 'Android', value: 'android' },
                      { label: 'Tech Lead', value: 'tech lead' },
                      { label: 'Backend', value: 'backend' }
                    ]
            }
            
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label="Roles"
            />
            )}
        />
        <Tooltip title="Dummy Filter">
        <Autocomplete sx={{ flexGrow:'2', minWidth:'13rem'}}
            multiple
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'numOfEmployees', value}))}
            id="tags-outlinedd"
            options={['1-10','11-20','21-50','51-100','101-200','201-500','500+']}
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label="Number of Employees"
            />
            )}
        />
        </Tooltip>
        <Autocomplete sx={{ flexGrow:'1', minWidth:'7rem'}}
            disablePortal
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'minExp', value}))}
            id="tags-outlined"
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        }
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            
            renderInput={(params) => (
            <TextField
                {...params}
                label="Experience"
            />
            )}
        />
        <Tooltip title="Dummy Filter">
        <Autocomplete  sx={{ flexGrow:'1', minWidth:'7rem'}}
            multiple
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'remote', value}))}
            id="tags-outlined"
            options={['Remote', 'Hybrid', 'In-Office']}
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label= "Remote"
            />
            )}
        />
        </Tooltip>
           <Autocomplete  sx={{ flexGrow:'1', minWidth:'7rem'}}
            multiple
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'location', value}))}
            id="tags-outlined"
            options={
                      [
                      { label: 'Delhi NCR', value: 'delhi ncr' },
                      { label: 'Mumbai', value: 'mumbai' },
                      { label: 'Remote', value: 'remote' },
                      { label: 'Chennai', value: 'chennai' },
                      { label: 'Bangalore', value: 'bangalore' }
                    ]
            }
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label= "Location"
            />
            )}
        />
         <Autocomplete sx={{ flexGrow:'1', minWidth:'13rem'}}
            disablePortal
            onChange={(e,value ) => dispatch(handleFilterChange({filterName:'minJdSalary',value }))}
            id="tags-outlined"
            options={["0 L", "10 L", "20 L", "30 L", "40 L", "50 L", "60 L", "70 L"] }
            renderInput={(params) => 
                <TextField {...params} label ="Minimum Base Salary" />}
        />
        <Autocomplete  sx={{ flexGrow:'2', minWidth:'13rem'}}
            onChange={(e ,value) => dispatch(handleFilterChange({filterName:'companyName',value}))}
            id="company-name"
            freeSolo
            autoSelect
            options={[]}
            renderInput={(params) => <TextField {...params} label ="Search Company Name" />}
        />
        {/* <Button onClick={handleSubmit}>Filter</Button> */}
     </Stack>
     
  );
}


import './filter.css'
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {  setFilteredData , handleFilterChange} from '../../features/slice'

export const filterJobs = (filters, jdList) => {
    console.log(filters,jdList)
    const filteredArray = jdList.filter(job => {
      // Check roles
      if (filters.roles.length && !filters.roles.includes(job.jobRole)) {
        return false;
      }
      // Check numOfEmployees (the remote property is not coming in JSON response so just wrote placeholder)
      // Assuming numOfEmployees filter to be a range like "0-10", "10-20"
      if (filters.numOfEmployees.length) {
        // if (job.numOfEmployees && !filters.numOfEmployees.some(range => checkRange(job.numOfEmployees, range))) {
        //   return false;
        // }
      }
      // Check minExp 
      if (filters.minExp && !(filters.minExp <=(job.maxExp) && (filters.minExp >=(job.minExp)))) {
        return false;
      }
      // Check remote (the remote property is not coming in JSON response so just wrote placeholder)
      if (filters.remote.length && !filters.remote.includes(job.remote.toLowerCase())) {
        return false;
      }
      // Check location
      if (filters.location.length && !filters.location.includes(job.location.toLowerCase())) {
        return false;
      }
      // Check minJdSalary
      if (filters.minJdSalary && !(filters.minJdSalary.replace(" L","") <=(job.maxJdSalary))
    ) {
        console.log("min filteer Salary",filters.minJdSalary ,"max JDSalary", (job.maxJdSalary) ,"min JDSalary", (job.minJdSalary))
        return false;
      }
      // Check companyName
      if (filters.companyName && !filters.companyName.toLowerCase().includes(job.companyName.toLowerCase())) {
        return false;
      }
      // All conditions met, include this job in the filtered array
      return true;
    });
    return {jdList: filteredArray}
  };

export const Filter=()=>{

    const jdList = useSelector((state)=>(state.jdState.jdList))
    const filteredData = useSelector((state)=>(state.filteredState))

    const filters = useSelector((state)=>(state.filters))

    const dispatch = useDispatch();

      // Function to handle filter submission
      const handleSubmit = () => {
        
            const filteredData = filterJobs(filters,jdList)
            console.log(filteredData)
            dispatch(setFilteredData(filteredData))
      };
    
    return (

        <Stack useFlexGap flexWrap="wrap"
        direction='row' justifyContent='flex-start'
        alignItems="center" spacing={1}  mb={2}
        >
        <Autocomplete  sx={{ flexGrow:'1'}}
            multiple
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'roles', value}))}
            id="tags-outlined"
            options={ ['frontend', 'ios', 'android', 'tech lead', 'backend']}
            
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label="roles"
                placeholder="Roles"
            />
            )}
        />
        <Autocomplete sx={{ flexGrow:'2'}}
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
                label="numOfEmployees"
                placeholder="Number of Employees"
            />
            )}
        />
        <Autocomplete sx={{ flexGrow:'1'}}
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
                label="minExp"
                placeholder="Experience"
            />
            )}
        />
        <Autocomplete  sx={{ flexGrow:'1'}}
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
                label="remote"
                placeholder="remote"
            />
            )}
        />
           <Autocomplete  sx={{ flexGrow:'1'}}
            multiple
            onChange={(e, value) => dispatch(handleFilterChange({filterName:'location', value}))}
            id="tags-outlined"
            options={['delhi ncr', 'mumbai', 'remote', 'chennai', 'bangalore']}
            // getOptionLabel={(option) => option.title}
            // defaultValue={}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label="location"
                placeholder="Location"
            />
            )}
        />
         <Autocomplete sx={{ flexGrow:'1'}}
            disablePortal
            onChange={(e,value ) => dispatch(handleFilterChange({filterName:'minJdSalary',value }))}
            id="tags-outlined"
            options={["0 L", "10 L", "20 L", "30 L", "40 L", "50 L", "60 L", "70 L"] }
            renderInput={(params) => 
                <TextField {...params} label="minJdSalary" placeholder="Minimum Base Salary" />}
        />
        <Autocomplete  sx={{ flexGrow:'2'}}
            onChange={(e ,value) => dispatch(handleFilterChange({filterName:'companyName',value}))}
            id="company-name"
            freeSolo
            options={[]}
            renderInput={(params) => <TextField {...params} label="companyName" placeholder="Search Company Name" />}
        />
        <Button onClick={handleSubmit}>Filter</Button>
     </Stack>
     
  );
}


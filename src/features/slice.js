import { createSlice } from '@reduxjs/toolkit'
import { fetchedData } from '../Data'
import { filterJobs } from '../components/filter/filter'

export const jdSlice = createSlice({
    name:'jd',
    initialState:{
        jdState:fetchedData,
        filteredState:fetchedData,
        filters: {
            roles: [],
            numOfEmployees: [],
            minExp: "",
            remote: [],
            location: [],
            minJdSalary: "" ,
            companyName: "" ,
          }
    },
    reducers:{
        setFetchedData: (state,action )=>{
            state.jdState = action.payload
        },
        setFilteredData: (state, action)=>{
            state.filteredState = action.payload
        }
        ,
        handleFilterChange : (state, {payload}) => {
            console.log("filter applied",payload)
            
             state.filters[payload.filterName] = payload.value

             const filteredData = filterJobs(state.filters,state.jdState.jdList)
             state.filteredState = filteredData
              
          }
    }
})

export const {setFetchedData, setFilteredData, handleFilterChange} = jdSlice.actions

export default jdSlice.reducer
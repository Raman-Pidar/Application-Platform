import {configureStore} from '@reduxjs/toolkit'
import  jdSlice  from '../features/slice'

export const store = configureStore({
    reducer: jdSlice,
})
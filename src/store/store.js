import {configureStore} from '@reduxjs/toolkit'
import CountReducer from './CountSlicer'


export const store =configureStore({
    reducer:{
        counter:CountReducer
    }
})
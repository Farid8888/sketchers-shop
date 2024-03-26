import {createSlice} from '@reduxjs/toolkit'



const initialState={
    count:24,
    price:144235
}


const CountSlicer =createSlice({
    name:'count',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
             state.count += 1
             state.price = state.price + action.payload
        }
    }
})


export const {addToCart} = CountSlicer.actions
export default CountSlicer.reducer
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    loveFORever:(state , action)=>{
      state.value = action.payload
      
    } ,
  },
})


export const { loveFORever , } = counterSlice.actions

export default counterSlice.reducer

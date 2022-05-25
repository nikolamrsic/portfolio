import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  is_open:false
}

export const modal_Slice = createSlice({
  name: 'korisnici',
  initialState,
  reducers: {

    openModal: (state, action) => {
     state.is_open=true;
    
    
    },
    
    closeModal: (state, action) => {
        state.is_open=false;
      
       
       },
    
  },
})

// Action creators are generated for each case reducer function
export const { openModal ,closeModal} = modal_Slice.actions

export default modal_Slice.reducer
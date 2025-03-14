import { createSlice, PayloadAction } from '@reduxjs/toolkit';  

interface RowState {  
  isInputActive: boolean;  
}  

const initialState: RowState = {  
  isInputActive: false,  
};  

const rowSlice = createSlice({  
  name: 'row',  
  initialState,  
  reducers: {  
    setIsInputActive(state, action: PayloadAction<boolean>) {  
      state.isInputActive = action.payload;  
    },  
  },  
});  

export const { setIsInputActive } = rowSlice.actions;  
export default rowSlice.reducer;  
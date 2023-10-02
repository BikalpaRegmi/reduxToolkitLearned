import { createSlice } from "@reduxjs/toolkit";


// Basically the slice means a part of store
const userSlice = createSlice({
    name:'users',
    initialState:[],
    // we use reducer to add functionality to the buttons
   reducers :{
    addUsers:(state,action)=>{
        state.push(action.payload); // Modify the state directly
    },
    deleteUsers:(state,action)=>{
        state.splice(action.payload,1)
    },
    removeAllUsers:(state,action)=>{
        return []
    },
   }
})
export default userSlice.reducer;
export const {addUsers,deleteUsers,removeAllUsers} = userSlice.actions;
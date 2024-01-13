import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        isLogin:false,
        selectedDep:"Sales",
    },
    reducers:{
        toggleLogin: (state)=>{
            state.isLogin=!state.isLogin;
        },
        addDep: (state,action)=>{
            state.selectedDep=action.payload;
        }
    }
})

export const { toggleLogin,addDep }= userSlice.actions;

export default userSlice.reducer;
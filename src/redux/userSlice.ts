import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    token: string,
    fact:string,
    isFactloading:boolean;
}

const initialState: UserState = {
    token: "",
    fact:"",
    isFactloading:false
}


export const setFact = createAsyncThunk('setFact', () => {
    return fetch('https://catfact.ninja/fact').then(x => x.json())
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.token = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(setFact.fulfilled,(state,action)=>{
            state.fact = action.payload.fact;
            state.isFactloading = false
        })
        builder.addCase(setFact.pending,(state,action)=>{
            state.isFactloading = true;
        })
    }
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions

export default userSlice.reducer
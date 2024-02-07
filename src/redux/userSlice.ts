import { LanguagePack } from './../core/models/language';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    token: string,
    fact: string,
    isFactloading: boolean;
    languagePack: LanguagePack,
    language:string
}

const initialState: UserState = {
    token: "",
    fact: "",
    isFactloading: false,
    language:"english",
    languagePack: {
        common: {
            editButton: "",
            saveButton: ""
        },
        login: {
            heading: ""
        }
    }
}


export const setFact = createAsyncThunk('setFact', () => {
    return fetch('https://catfact.ninja/fact').then(x => x.json())
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setLanguagePack: (state, action: PayloadAction<LanguagePack>) => {
            state.languagePack = action.payload;
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setFact.fulfilled, (state, action) => {
            state.fact = action.payload.fact;
            state.isFactloading = false
        })
        builder.addCase(setFact.pending, (state, action) => {
            state.isFactloading = true;
        })
    }
})

// Action creators are generated for each case reducer function
export const { setToken,setLanguagePack,setLanguage } = userSlice.actions

export default userSlice.reducer
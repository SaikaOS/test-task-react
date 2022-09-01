import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    fullName: string,
    username: string | number,
    password: string | number,
    isLoggedIn: boolean
}

const initialState:IState = {
    fullName: '',
    username: '',
    password: '',
    isLoggedIn: false
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setFullName: (state, action:PayloadAction<string>) => {
            state.fullName = action.payload
        },
        setUserName: (state, action:PayloadAction<string | number>) => {
            state.username = action.payload
        },
        setPassword: (state, action:PayloadAction<string | number>) => {
            state.password = action.payload
        },
        setAuth: (state) => {
            state.isLoggedIn = true
        },
        setExit: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const { setFullName, setUserName, setPassword, setAuth, setExit} = slice.actions

export default slice.reducer
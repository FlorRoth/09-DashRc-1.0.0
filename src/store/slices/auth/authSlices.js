import { createSlice } from "@reduxjs/toolkit";


const initialValues = {
    user: {
        username: null,
        email: null
    },
    isLogged: false,
    token: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialValues,
    reducers: {
        login: (state,action) => {
            state.token = action.payload.token
            state.isLogged = true,
            state.user = action.payload.user
        },

        logout: (state) => {
            state.token = null,
            state.isLogged = false,
            state.user = {
                username: null,
                email: null
            }
        }
        
    }
})

export const {login} = authSlice.actions;
import { createSlice } from "@reduxjs/toolkit";


const initialValues = {
   products: []
}


export const productsSlice = createSlice({
    name: 'products',
    initialState: initialValues,
    reducers: {
        getAll: (state,action) => {
            state.products = action.payload.products

        }
        
    }
})

export const {getAll} =  productsSlice.actions;
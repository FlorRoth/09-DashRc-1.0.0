import React, { useReducer } from 'react';

import { axiosDash } from '../config/dashAxios';
import { ProductsReducer } from '../reducers/ProductsReducer';
import { ProductContexts } from '../contexts/ProductContexts';


const initialValues = {
    products: {}
    
}

export const ProductsProvider = ({children}) => {

const [state, dispatch] = useReducer(ProductsReducer,initialValues);

const getAllProducts = async () => {

    const {data} = await axiosDash.get('/products');
    
    dispatch({
        type: 'GETALL',
        payload: {
        products: data.products }
    })


}


return (
    <ProductContexts.Provider value={{state,getAllProducts}}>
        {children}
    </ProductContexts.Provider>

  )
}

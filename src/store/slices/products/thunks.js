import { axiosDash } from "../../../config/dashAxios";
import { getAll } from "./productsSlices";



export const getProducts = () =>{
   

    return async (dispatch, getState) => {
    
        const {data} = await axiosDash.get('/products');
        
        dispatch(getAll({products: data.products}));

    }
}
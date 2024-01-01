


export const ProductsReducer = (state={},action) => {

    switch (action.type) {
        case 'GETALL':
            return {
                ...state,
                products: action.payload.products
            }

        case 'GETBYID':
            return {
                ...state,
                product: action.payload.product
            }
        
        default:
            state;
    }
}
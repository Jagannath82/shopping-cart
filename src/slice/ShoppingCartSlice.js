import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            var productList = state.products;


            var existingProduct = productList.find(tempProduct => (tempProduct.productId === action.payload.productId))
            console.log(existingProduct);
            console.log("Quantity :: " + action.payload.quantity);
            if (existingProduct) {
                productList.forEach(product => {
                    console.log("product :: " +JSON.stringify(product));
                    if(product.productId === action.payload.productId){
                        product.quantity += parseInt(action.payload.quantity);
                    }
                })
            } else {
                state.products.push({
                    productId: action.payload.productId,
                    quantity: parseInt(action.payload.quantity)
                });
            }
        },
    },

})

export const { addProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

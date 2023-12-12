import { configureStore } from '@reduxjs/toolkit';

import shoppingCartSlice from './../slice/ShoppingCartSlice';

const store = configureStore({
  reducer: {
    products: shoppingCartSlice
  },
});

export default store;
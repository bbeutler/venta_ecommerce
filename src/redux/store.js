import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice"
const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

export default store
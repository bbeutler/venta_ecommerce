import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "",
    data: {
      cart: [],
      categories: [],
      viewedProduct: {},
      searchResult: [],
    },
    user: {

    }
  },
  reducers: {

    authUser(state, actions) {
      state.user =   {...actions.payload}
    },

    clearCartegories(state, actions) {
      state.data.categories = [];
      state.data.viewedProduct = {};
    },

    defaultCat(state, actions) {
      state.data.categories = [...state.data?.allProducts];
      state.data.status = "stopFetch";
    },

    addToCart(state, actions) {
      const exist = state.data.cart.findIndex((prod) => {
        return prod.id === actions.payload.id;
      });

      if (exist >= 0)
        state.data.cart[exist] = {
          ...state.data.cart[exist],
          quantity: state.data.cart[exist].quantity + 1,
        };
      else state.data.cart.push(actions.payload);

      // if(window.localStorage.cart === undefined) window.localStorage.cart =JSON.stringify( [actions.payload])
      // else window.localStorage.cart = JSON.stringify( [...JSON.parse(window.localStorage.cart), actions.payload])
      // state.data.cart.push(exist);
    },
    removeFromCart(state, actions) {
      state.data.cart = state.data.cart.filter((prod) => {
        return prod.id !== actions.payload;
      });

      window.localStorage.cart = JSON.stringify(state.data.cart);
    },

    changeQuantity(state, actions) {
      const value = state.data.cart.map((item) => {
        if (
          item.id === actions.payload.id &&
          actions.payload.type === "increase"
        )
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        else if (
          item.id === actions.payload.id &&
          actions.payload.type === "decrease"
        )
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        return item;
      });

      state.data.cart = value;
      window.localStorage.cart = JSON.stringify(value);
    },
  },

  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, (state, actions) => {
        state.status = "fetching";
      })
      .addCase(getProducts.fulfilled, (state, actions) => {
        state.status = "success";
        state.data.allProducts = actions.payload.products;
        state.data.categories = actions.payload.products;
      })
      .addCase(getProducts.rejected, (state, actions) => {
        state.status = "error";
      })
      .addCase(getCategories.fulfilled, (state, actions) => {
        state.data.categories = actions.payload.products;
      })
      .addCase(getProductById.fulfilled, (state, actions) => {
        state.data.viewedProduct = actions.payload;
      })
      .addCase(getSearchResult.fulfilled, (state, actions) => {
        state.data.searchResult = actions.payload.products;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetch("https://dummyjson.com/products?limit=100");
    return products.json();
  }
);

export const getProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const products = await fetch("https://dummyjson.com/products/" + id);
    return products.json();
  }
);

export const getCategories = createAsyncThunk(
  "products/fetchCategories",
  async (url) => {
    const products = await fetch(
      "https://dummyjson.com/products/category/" + url
    );
    return products.json();
  }
);

export const getSearchResult = createAsyncThunk(
  "products/fetchSearchProduct",
  async (id) => {
    const products = await fetch(
      "https://dummyjson.com/products/search?q=" + id
    );
    
    return products.json();
  }
);

export const selectProducts = (state) => {
  return state.products.data?.allProducts;
};

export const selectProductById = (state) => {
  return state.products.data.viewedProduct;
};

export const selectCart = (state) => {
  return state.products.data.cart;
};

export const selectCategories = (state) => {
  return state.products.data.categories;
};

export const selectSearchResult = (state) => {
  return state.products.data.searchResult;
};

export const productActions = productsSlice.actions;
export default productsSlice.reducer;

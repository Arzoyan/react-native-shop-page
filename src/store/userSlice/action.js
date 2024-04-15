import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCategoryListAPI,
  getCategoryWithProductsAPI,
  getMeAPI,
  getProductListAPI,
  getSingleProductAPI,
  loginUserAPI,
} from "./api";

export const getAllCategoryAction = createAsyncThunk(
  "category/list",
  async () => {
    try {
      const response = await getCategoryListAPI();
      return response;
    } catch (error) {
      throw new Error("Error fetching :" + error.message);
    }
  }
);
export const getProductListAction = createAsyncThunk(
  "product/list",
  async ({ searchData, categoryName }) => {
    try {
      const response = await getProductListAPI({ searchData, categoryName });
      return response;
    } catch (error) {
      throw new Error("Error fetching :" + error.message);
    }
  }
);
export const getCategoryWithProductsAction = createAsyncThunk(
  "categoryWithProduct/list",
  async (productLimit) => {
    try {
      const response = await getCategoryWithProductsAPI(productLimit);
      return response;
    } catch (error) {
      throw new Error("Error fetching :" + error.message);
    }
  }
);
export const getSingleProductAction = createAsyncThunk(
  "product/item",
  async (productId) => {
    try {
      const response = await getSingleProductAPI(productId);
      return response;
    } catch (error) {
      throw new Error("Error fetching :" + error.message);
    }
  }
);
export const getMeAction = createAsyncThunk(
  "me/item",
  async (_, { getState }) => {
    const token = getState();
    try {
      const response = await getMeAPI(token.user.token);
      return response;
    } catch (error) {
      throw new Error("Error fetching :" + error.message);
    }
  }
);
export const loginAction = createAsyncThunk("login", async () => {
  try {
    const response = await loginUserAPI();
    return response;
  } catch (error) {
    throw new Error("Error login :" + error.message);
  }
});

export const requestHandler = (builder) => {
  builder
    .addCase(getAllCategoryAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryList = action.payload;
    })
    .addCase(getAllCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.categoryList = [];
      state.error = action.error.message;
    })
    .addCase(getProductListAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProductListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    })
    .addCase(getProductListAction.rejected, (state, action) => {
      state.loading = false;
      state.productList = [];
      state.error = action.error.message;
    })
    .addCase(getCategoryWithProductsAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCategoryWithProductsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryWithProductList = action.payload;
    })
    .addCase(getCategoryWithProductsAction.rejected, (state, action) => {
      state.loading = false;
      state.categoryWithProductList = [];
      state.error = action.error.message;
    })
    .addCase(getSingleProductAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(getSingleProductAction.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    })
    .addCase(getSingleProductAction.rejected, (state, action) => {
      state.loading = false;
      state.categoryWithProductList = [];
      state.error = action.error.message;
    })
    .addCase(getMeAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(getMeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profileInfo = action.payload;
    })
    .addCase(getMeAction.rejected, (state, action) => {
      state.loading = false;
      state.categoryWithProductList = [];
      state.error = action.error.message;
    })
    .addCase(loginAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.categoryWithProductList = [];
      state.error = action.error.message;
    });
};

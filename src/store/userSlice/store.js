import { createSlice } from "@reduxjs/toolkit";
import { requestHandler } from "./action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    wishList: [],
    wishListItemsId: [],
    loading: true,
    categoryList: [],
    productList: [],
    categoryWithProductList: [],
    singleProduct: {},
    profileInfo: {},
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    logOutAction: (state) => {
      state.token = "";
      state.wishList = [];
      state.wishListItemsId = [];
      state.loading = true;
      state.categoryList = [];
      state.productList = [];
      state.categoryWithProductList = [];
      state.singleProduct = {};
      state.profileInfo = {};
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
      state.wishListItemsId.push(action.payload.id);
    },
    removeWishList: (state, action) => {
      const filterDataId = state.wishListItemsId.filter(
        (item) => item !== action.payload.id
      );
      const filteredData = state.wishList.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.wishList = filteredData;
      state.wishListItemsId = filterDataId;
    },
  },
  extraReducers: (builder) => requestHandler(builder),
});

export const selectLoadingStatus = (state) => state.user.loading;
export const selectAllCategoryItems = (state) => state.user.categoryList;
export const selectAllProductItems = (state) => state.user.productList;
export const selectAllCategoryWithProducts = (state) =>
  state.user.categoryWithProductList;
export const selectSingleProduct = (state) => state.user.singleProduct;
export const selectProfileInfo = (state) => state.user.profileInfo;
export const selectToken = (state) => state.user.profileInfo;

export const { addToken, addWishList, removeWishList, logOutAction } =
  userSlice.actions;
export default userSlice.reducer;

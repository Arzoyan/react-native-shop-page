import React, { useEffect } from "react";
import { ScrollView } from "react-native";

import flirtsBanner from "../../../assets/images/banner1.jpg";
import secondBanner from "../../../assets/images/banner2.jpg";
import thirdBanner from "../../../assets/images/banner3.jpg";
import LoadingComponent from "../../components/Loading";
import AllCategoryList from "../../components/AllCategoryList";
import Header from "../../components/Header";
import { getCategoryWithProductsAction } from "../../store/userSlice/action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCategoryWithProducts,
  selectLoadingStatus,
} from "../../store/userSlice/store";
import Slideshow from "../../components/Slider";

const bannerList = [flirtsBanner, secondBanner, thirdBanner];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const categories = useSelector(selectAllCategoryWithProducts);

  useEffect(() => {
    dispatch(getCategoryWithProductsAction());
  }, [dispatch]);

  return (
    <>
      <Header search />
      <ScrollView>
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <Slideshow
              images={bannerList || []}
              containerStyles={{
                height: 215,
                marginVertical: 24,
                borderRadius: 10,
                marginHorizontal: 32,
                borderRadius: 10,
              }}
            />
            <AllCategoryList categories={categories} />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreen;

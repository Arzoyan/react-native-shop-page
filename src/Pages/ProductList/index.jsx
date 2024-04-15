import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import LoadingComponent from "../../components/Loading";
import ItemCard from "../../components/Card/Card";
import Header from "../../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getProductListAction } from "../../store/userSlice/action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProductItems,
  selectLoadingStatus,
} from "../../store/userSlice/store";

const ProductList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const products = useSelector(selectAllProductItems);

  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(
      getProductListAction({
        searchData: value,
        categoryName: route.params?.categoryName || "",
      })
    );
  }, [dispatch, value]);

  return (
    <>
      <Header back value={value} setValue={setValue} />
      {loading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          data={products.length > 0 ? products : []}
          numColumns={2}
          contentContainerStyle={styles.categoryListContainerRoot}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>Data with {value} not found</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  productId: item.id,
                })
              }
            >
              <>
                <ItemCard
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  img={item.images[0]}
                  id={item.id}
                  product={item}
                />
              </>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  categoryListContainerRoot: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
export default ProductList;

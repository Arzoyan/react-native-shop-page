import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ItemCard from "../../components/Card/Card";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const wishList = useSelector((state) => {
    return state.user.wishList;
  });
  return (
    <>
      <Header title="Wishlist" />
      <FlatList
        data={wishList}
        numColumns={2}
        contentContainerStyle={styles.categoryListContainerRoot}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>List Empty</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", {
                productId: item?.id,
              })
            }
          >
            <ItemCard
              title={item.title}
              price={500}
              rating={4.5}
              img={item.images[0]}
              id={item?.id}
              product={item}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  categoryListContainerRoot: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default WishlistScreen;

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ItemCard from "../../components/Card/Card";

const AllCategoryList = ({ categories }) => {
  const navigation = useNavigation();

  return categories.map((category) => {
    return (
      <View key={category.name} style={styles.categoryRootContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryName}>{category.name.toUpperCase()}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductList", {
                categoryName: category.name,
              })
            }
          >
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemList}>
          {category.products.products.map((product) => {
            return (
              <TouchableOpacity
                key={product.id}
                onPress={() =>
                  navigation.navigate("ProductDetails", {
                    productId: product.id,
                  })
                }
              >
                <ItemCard
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  img={product.images[0]}
                  id={product.id}
                  product={product}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  categoryRootContainer: {
    borderBottomWidth: 1,
    backgroundColor: "#F9F9F9",
    borderBottomColor: "#FF9900",
    padding: 10,
    width: "100%",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  seeAllText: {
    color: "#7867BE",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    borderBottomColor: "#7867BE",
    borderBottomWidth: 1,
  },
});

export default AllCategoryList;

import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon, Paragraph, Title } from "react-native-paper";
import Button from "../../components/Button/Button";
import LoadingComponent from "../../components/Loading";
import Slideshow from "../../components/Slider";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoadingStatus,
  selectSingleProduct,
} from "../../store/userSlice/store";
import { useRoute } from "@react-navigation/native";
import { getSingleProductAction } from "../../store/userSlice/action";

const Product = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const product = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(getSingleProductAction(route.params.productId));
  }, [dispatch]);

  return (
    <>
      <Header back />
      {loading ? (
        <LoadingComponent />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Slideshow images={product?.images || []} />
          <View style={styles.productDetailHeaderRootContainer}>
            <Text>Product</Text>
            <View style={styles.productDetailInfoContainer}>
              <Title style={styles.title}>
                {product.title || "product name "}{" "}
              </Title>
              <Paragraph style={styles.title}>
                $ {product.price || "product.price "}
              </Paragraph>
              <Paragraph style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemTitle}>Rating</Text>
                </View>
                <View style={styles.rating}>
                  <Icon
                    source="star"
                    color={"rgba(255, 199, 0, 1)"}
                    size={15}
                    style={styles.starIcon}
                  />
                  <View>
                    <Text style={styles.itemName}>{product.rating}</Text>
                  </View>
                </View>
              </Paragraph>
              <Paragraph style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemTitle}>ID:</Text>
                </View>
                <View>
                  <Text style={styles.itemName}>
                    {" "}
                    {product.id || "product.id "}
                  </Text>
                </View>
              </Paragraph>
              <Paragraph style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemTitle}>Brand:</Text>
                </View>
                <View>
                  <Text style={styles.itemName}>
                    {product.brand || "product.brand "}
                  </Text>
                </View>
              </Paragraph>
              <Paragraph style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemTitle}>Categories:</Text>
                </View>
                <View>
                  <Text style={styles.itemName}>
                    {product.category || "product.category "}
                  </Text>
                </View>
              </Paragraph>
            </View>
          </View>
          <View>
            <Title style={styles.description}>
              {product.description || "product.description "}{" "}
            </Title>
          </View>
          <View style={styles.productDetailFooterContainer}>
            <View style={styles.productDetailFooterPriceContainer}>
              <Title style={styles.total}>Total </Title>
              <Title style={styles.price}>
                {product.price || "product.description"}
                {"$"}
              </Title>
            </View>
            <Button style={styles.button} label={"ADD TO CART"} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  productDetailHeaderRootContainer: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#1E1D1D",
    marginBottom: 16,
  },
  ratingRootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  starIcon: {
    margin: 0,
    padding: 0,
  },
  itemContainer: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    marginRight: 10,
    padding: 0,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 16,
    padding: 0,
  },
  description: {
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 24,
    color: "#8F8F8F",
  },
  productDetailFooterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    marginTop: 24,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  button: {
    width: 151,
    height: 44,
    borderRadius: 5,
    color: "#FFF",
    fontWeight: "400",
    backgroundColor: "#7867BE",
    lineHeight: 16,
  },
  total: {
    fontSize: 10,
    fontWeight: "400",
    color: "#777",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    lineHeight: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
  },
});

export default Product;

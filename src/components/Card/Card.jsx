import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, IconButton, MD3Colors } from "react-native-paper";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../../store/userSlice/store";

const ItemCard = ({ title, rating, price, img, id, product }) => {
  const dispatch = useDispatch();
  const wishListItemsId = useSelector((state) => {
    return state.user.wishListItemsId;
  });

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri:
              img ||
              "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4",
          }}
          style={styles.image}
        />

        <IconButton
          icon="heart"
          iconColor={
            wishListItemsId.includes(id)
              ? MD3Colors.error50
              : MD3Colors.secondary80
          }
          size={20}
          onPress={() => {
            wishListItemsId.includes(id)
              ? dispatch(removeWishList(product))
              : dispatch(addWishList(product));
          }}
          style={styles.icon}
        />
      </View>
      <View style={styles.title}>
        <Text>{title.toUpperCase()}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.rating}>
          <Icon
            source="star"
            color={"rgba(255, 199, 0, 1)"}
            size={15}
            style={styles.starIcon}
          />
          <Text style={styles.ratingTitle}>{rating}</Text>
        </View>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 164,
    marginRight: 15,
    marginBottom: 16,
  },
  image: {
    width: 164,
    height: 164,
    borderRadius: 10,
    position: "relative",
  },
  icon: { position: "absolute", right: 0 },
  title: {
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingTitle: {
    fontSize: 12,
    fontWeight: "normal",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    margin: 0,
    padding: 0,
    marginLeft: -8,
  },
});

export default ItemCard;

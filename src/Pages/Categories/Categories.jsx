import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card, Title } from "react-native-paper";
import LoadingComponent from "../../components/Loading";
import Header from "../../components/Header";
import { getAllCategoryAction } from "../../store/userSlice/action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCategoryItems,
  selectLoadingStatus,
} from "../../store/userSlice/store";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const categoryList = useSelector(selectAllCategoryItems);
  const loading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);

  const navigateProductPage = (category) => {
    navigation.navigate("ProductList", {
      categoryName: category,
    });
  };
  return (
    <>
      <Header title="CATEGORIES" search />

      {loading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          contentContainerStyle={styles.categoryListContainerRoot}
          data={categoryList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}> List empty</Text>
          )}
          renderItem={({ item }) => (
            <Card
              style={styles.categoryListContainer}
              onPress={() => navigateProductPage(item.title)}
            >
              <Card.Cover source={item.image} />
              <View style={styles.categoryItemTitleContainer}>
                <Title style={styles.categoryItemTitle}>
                  {item.title.toUpperCase()}
                </Title>
              </View>
            </Card>
          )}
          keyExtractor={(item) => item.title}
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
  categoryListContainer: {
    position: "relative",
    marginBottom: 16,
    height: "130px",
    borderRadius: 10,
  },
  categoryItemTitleContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  categoryItemTitle: {
    lineHeight: 19,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CategoriesScreen;

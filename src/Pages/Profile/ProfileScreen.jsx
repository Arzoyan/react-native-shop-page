import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserItem from "./UserItem";
import { useDispatch, useSelector } from "react-redux";
import {
  logOutAction,
  selectLoadingStatus,
  selectProfileInfo,
} from "../../store/userSlice/store";
import LoadingComponent from "../../components/Loading";
import Header from "../../components/Header";
import Icon from "../../UI/icons";
import { useNavigation } from "@react-navigation/native";
import { getMeAction } from "../../store/userSlice/action";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const user = useSelector(selectProfileInfo);

  useEffect(() => {
    dispatch(getMeAction());
  }, [dispatch]);

  const logOutHandler = () => {
    dispatch(logOutAction());
    navigation.navigate("Home");
  };

  return (
    <View style={styles.rootContainer}>
      <Header title="Profile" />
      {loading || !user.firstName ? (
        <LoadingComponent />
      ) : (
        <>
          <UserItem user={user} />
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={logOutHandler}>
              <View style={styles.logoutContainer}>
                <Icon name={"Logout"} />
                <Text style={styles.logoutText}>Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    flex: 1,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerContainer: {
    marginHorizontal: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 52,
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    borderBottomColor: "#e6e6e6",
  },
  logoutText: {
    marginVertical: 16,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 16,
    color: "#1E1D1D",
  },
});
export default ProfileScreen;

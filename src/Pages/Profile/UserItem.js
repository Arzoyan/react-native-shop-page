import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Avatar } from "react-native-paper";

const UserItem = ({ user }) => {
  return (
    <Card.Title
      style={styles.userItem}
      title={`${user?.firstName} ${user?.lastName}` || "Card Title"}
      subtitle={user?.gender || "Card Subtitle"}
      left={() => <Avatar.Image size={50} source={{ uri: user.image }} />}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    borderBottomColor: "#FF9900",
  },
});

export default UserItem;

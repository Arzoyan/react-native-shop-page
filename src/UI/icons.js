import React from "react";
import { View } from "react-native";

import ArrowLeft from "./icons/arrowLeft";
import ArrowRight from "./icons/arrowRight";
import Favorite from "./icons/favorite";
import FavoriteEmpty from "./icons/favoriteEmpty";
import Home from "./icons/home";
import Logout from "./icons/logout";
import Person from "./icons/person";
import Search from "./icons/search";
import Star from "./icons/star";
import ViewComfyAlt from "./icons/viewComfyAlt";
import Close from "./icons/close";

const Icons = {
  ArrowLeft,
  ArrowRight,
  Favorite,
  FavoriteEmpty,
  Home,
  Logout,
  Person,
  Search,
  Star,
  ViewComfyAlt,
  Close,
};

export default ({
  name,
  spaceLeft = 0,
  spaceRight = 0,
  spaceTop = 0,
  spaceBottom = 0,
  ...props
}) => {
  const TagName = Icons[name];

  if (TagName) {
    return (
      <View
        style={{
          marginLeft: spaceLeft,
          marginRight: spaceRight,
          marginTop: spaceTop,
          marginBottom: spaceBottom,
        }}
      >
        <TagName {...props} />
      </View>
    );
  }

  return null;
};

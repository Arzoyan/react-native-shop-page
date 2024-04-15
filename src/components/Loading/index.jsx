import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "react-native-paper";

const LoadingComponent = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height:500
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingComponent;

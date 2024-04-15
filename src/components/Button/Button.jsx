import React from "react";
import { Button } from "react-native-paper";

const MyButton = ({ label, onPress, style, disabled }) => {
  return (
    <Button
      style={style || {}}
      mode="contained" 
      onPress={onPress}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default MyButton;

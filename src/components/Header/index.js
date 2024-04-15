import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Icons from "../../UI/icons";
import logo from "../../../assets/images/logo.png";

const Header = ({
  back = false,
  search = false,
  title = "",
  setValue = false,
  value = "",
}) => {
  const navigation = useNavigation();

  const navigateOnenterScreen = () => {
    navigation.navigate("ProductList");
  };
  return (
    <View style={styles.container}>
      <View style={[styles.back, setValue ? { width: 40 } : {}]}>
        {back ? (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icons name="ArrowLeft" />
          </TouchableOpacity>
        ) : (
          <Image source={logo} style={styles.logo} />
        )}
      </View>
      {setValue ? (
        <View style={styles.inputWrapper}>
          <Icons name={"Search"} />
          <TextInput
            style={styles.input}
            onChange={(event) => {
              setValue(event.nativeEvent.text);
            }}
            value={value}
            selectionColor={"#343434"}
          />
          {value && (
            <TouchableOpacity
              onPress={() => setValue("")}
              hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            >
              <Icons name={"Close"} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <>
          <View style={styles.title}>
            {title && <Text style={styles.text}>{title.toUpperCase()}</Text>}
          </View>
          <View style={styles.search}>
            {search && (
              <TouchableOpacity onPress={() => navigateOnenterScreen()}>
                <Icons name="Search" />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48 + StatusBar.currentHeight,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  back: {
    width: 50,
  },
  search: {
    width: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 43,
    height: 26,
  },
  text: {
    color: "#1E1D1D",
    fontSize: 16,
    fontWeight: "500",
  },
  inputWrapper: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 12,
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 8,
  },
});

export default Header;

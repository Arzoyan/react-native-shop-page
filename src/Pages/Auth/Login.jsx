import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import MyButton from "../../components/Button/Button";
import { TextInput } from "react-native-paper";
import logo from "../../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { loginAction } from "../../store/userSlice/action";

const LogInPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await dispatch(loginAction());
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header back />
      <ScrollView style={styles.rootContainer}>
        <View>
          <Text style={styles.rootContainerHeader}>Log In </Text>
        </View>
        <View style={styles.logo}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>User Name</Text>
            <Text style={styles.inputLabelRequire}>*</Text>
          </View>
          <TextInput
            style={styles.inputField}
            value={userName}
            onChangeText={(text) => setUsername(text.trim())}
            mode="outlined"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}> Password</Text>
            <Text style={styles.inputLabelRequire}>*</Text>
          </View>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <MyButton
          label="LOG IN"
          onPress={handleLogin}
          style={styles.button}
          disabled={!userName || !password}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 40,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  rootContainerHeader: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 28,
    textAlign: "center",
  },
  image: {
    width: 140,
    height: 84,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 30,
  },
  button: {
    height: 44,
    borderRadius: 10,
    backgroundColor: "#7867BE",
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
  inputLabelContainer: {
    flexDirection: "row",
  },
  inputLabelRequire: {
    color: "#F34040",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1E1D1D",
  },
  inputField: {
    borderRadius: 10,
    height: 52,
    marginBottom: 24,
    borderColor: "#E6E6E6",
    borderWidth: 1,
  },
});

export default LogInPage;

import React from "react";
import { Button, TouchableOpacity, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Pages/Home/HomeScreen";
import CategoriesScreen from "./Pages/Categories/Categories";
import WishlistScreen from "./Pages/Wishlist/WishlistScreen";
import ProfileScreen from "./Pages/Profile/ProfileScreen";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInPage from "./Pages/Auth/Login";
import Icon from "./UI/icons";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  const token = useSelector((state) => {
    return state.user.token;
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#7867BE",
        tabBarInactiveTintColor: "#CACACA",
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name={"Home"} color={focused ? "#7867BE" : "#CACACA"} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"ViewComfyAlt"}
              color={focused ? "#7867BE" : "#CACACA"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"FavoriteEmpty"}
              color={focused ? "#7867BE" : "#CACACA"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name={"Person"} color={focused ? "#7867BE" : "#CACACA"} />
          ),
          ...(!token && {
            tabBarButton: (props) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginPage")}
                style={{
                  width: width / 4,
                  flex: 1,
                  alignItems: "center",
                  marginTop: 9,
                }}
              >
                <Icon name={"Person"} color={"#CACACA"} />
                <Text style={{ color: "#CACACA", fontSize: 10, marginTop: 10 }}>
                  Profile
                </Text>
              </TouchableOpacity>
            ),
          }),
        })}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LogInPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
import MyProduct from "../Screens/Products/MyProduct";
import OtherProduct from "../Screens/Products/OtherProducts";
import Categories from "../Screens/Products/Categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreateProduct from "../Screens/Products/CreateProduct";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
export default function ProductNav({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <MaterialCommunityIcons
          name="menu"
          size={30}
          style={{ margin: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <MaterialCommunityIcons
          color={Colors.primary}
          name="plus-box"
          size={25}
          style={{ margin: 10, marginRight: 20 }}
          onPress={() => navigation.navigate("createProducts")}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "400",
            textTransform: "capitalize",
            fontFamily: "lato-bold",
          },
        }}
      >
        <Tab.Screen
          name="open"
          component={MyProduct}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
        <Tab.Screen
          name="OtherProducts"
          component={OtherProduct}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
        <Tab.Screen
          name="categories"
          component={Categories}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
}

export const ProductsNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="products" component={ProductNav} />
      <Stack.Screen name="createProducts" component={CreateProduct} />
    </Stack.Navigator>
  );
};

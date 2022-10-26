import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
import MyProduct from "../Screens/Products/MyProduct";
import OtherProduct from "../Screens/Products/OtherProducts";
import Categories from "../Screens/Products/Categories";
export default function ProductNav() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OpenOrders from "../Screens/Orders/OpenOrders";
import CloseOrders from "../Screens/Orders/CloseOrders";
import DisputedOrders from "../Screens/Orders/Disputed";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
export default function OrderNav() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "400",
            textTransform: "capitalize",
            fontFamily: "lato-bold",
          },
        }}
      >
        <Tab.Screen
          name="open"
          component={OpenOrders}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
        <Tab.Screen
          name="Close"
          component={CloseOrders}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
        <Tab.Screen
          name="Dispute"
          component={DisputedOrders}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
}

const styles = StyleSheet.create({});

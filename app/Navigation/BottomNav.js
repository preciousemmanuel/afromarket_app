import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Delivery from "../Screens/Delivery/Delivery";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarketNav from "./MarketNav";
import OrderNav, { OrdersNav } from "./OrderNav";
import ProductNav, { ProductsNav } from "./ProductNav";
import DisputeNav from "./DisputeNav";
import Colors from "../Config/Colors";
import DeliveryNav from "./DeliveryNav";
export default function BottomNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Markets"
        component={MarketNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-city" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-bag" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

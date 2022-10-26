import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Markets from "../Screens/Markets";
import MarketDetails from "../../app/Screens/MarketDetails";
import ListingDetails from "../Screens/ListingDetails";
export default function MarketNav() {
  const Tab = createNativeStackNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="market" component={Markets} />
      <Tab.Screen
        name="marketDetails"
        component={MarketDetails}
        options={{
          headerShown: true,
          headerTitleStyle: {
            width: 0,
            color: "#fff",
          },
        }}
      />
      <Tab.Screen
        name="productDetails"
        component={ListingDetails}
        options={{
          headerShown: true,
          headerTitleStyle: {
            width: 0,
            color: "#fff",
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

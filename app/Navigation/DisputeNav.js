import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
import OpenDispute from "../Screens/Dispute/OpenDispute";
import ClosedDisputes from "../Screens/Dispute/ClosedDisputes";
export default function DisputeNav() {
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
          name="Active"
          component={OpenDispute}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
            tabBarLabel: "Active disputes",
          }}
        />
        <Tab.Screen
          name="Close"
          component={ClosedDisputes}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
            tabBarLabel: "Closed disputes",
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
}

const styles = StyleSheet.create({});

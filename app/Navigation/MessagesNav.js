import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
import Messages from "../Screens/Messages";
import Negotiations from "../Screens/Negotiations";
import { createStackNavigator } from "@react-navigation/stack";

export default function MessageNav() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "400",
            textTransform: "capitalize",
            fontFamily: "lato-bold",
          },
          headerShownVisible: false,
        }}
      >
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
            tabBarLabel: "Messages",
          }}
        />
        <Tab.Screen
          name="Negotiations"
          component={Negotiations}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
            tabBarLabel: "Negotiations",
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export const NotNav = () => {
  const Tab = createStackNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "400",
            textTransform: "capitalize",
            fontFamily: "lato-bold",
          },
        }}
      >
        <Tab.Screen
          name="Negotiations"
          component={Negotiations}
          options={{
            tabBarInactiveTintColor: Colors.dark_light,
            tabBarActiveTintColor: Colors.primary,
            tabBarLabel: "Negotiations",
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

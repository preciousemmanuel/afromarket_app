import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OpenOrders from "../Screens/Orders/OpenOrders";
import CloseOrders from "../Screens/Orders/CloseOrders";
import DisputedOrders from "../Screens/Orders/Disputed";
import Screen from "../Screens/Screen";
import Colors from "../Config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderDetails from "../Screens/Orders/OrderDetails";
import { createStackNavigator } from "@react-navigation/stack";
export default function OrderNav({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
      <MaterialCommunityIcons
        name="menu"
        size={30}
        style={{ margin: 10 }}
        onPress={() => navigation.openDrawer()}
      />
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

export const OrdersNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="orderses" component={OrderNav} />
      <Stack.Screen name="orderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

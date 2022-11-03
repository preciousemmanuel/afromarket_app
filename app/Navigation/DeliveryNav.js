import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Delivery from "../Screens/Delivery/Delivery";
import NewRateCard from "../Screens/Delivery/NewRateCard";
import Screen from "../Screens/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function DeliveryNav({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <Screen>
      <MaterialCommunityIcons
        name="menu"
        size={30}
        style={{ margin: 10 }}
        onPress={() => navigation.openDrawer()}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="welcome"
      >
        <Stack.Screen name="address" component={Delivery} />
        <Stack.Screen name="newRate" component={NewRateCard} />
      </Stack.Navigator>
    </Screen>
  );
}

export default DeliveryNav;

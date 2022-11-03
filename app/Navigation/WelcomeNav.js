import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegBusiness from "../Screens/MerchantAccount/RegBusiness";
import { RegisterUser } from "../Screens/Auth/Register";
import Onboarding from "../Screens/MerchantAccount/Onboarding";
import WelcomeScreen from "../Screens/WelcomeScreen";
import Login from "../Screens/Auth/Login";
import Merchant from "../Screens/Merchant";
function WelcomeNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="welcome"
    >
      <Stack.Screen name="welcome1" component={WelcomeScreen} />
      <Stack.Screen name="welcome2" component={Merchant} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="user" component={RegisterUser} />
      <Stack.Screen name="merchant" component={RegBusiness} />
    </Stack.Navigator>
  );
}

export default WelcomeNav;

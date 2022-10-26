import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import NavTheme from "./app/Navigation/NavTheme";
import ProductNav from "./app/Navigation/ProductNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderNav from "./app/Navigation/OrderNav";
import MarketNav from "./app/Navigation/MarketNav";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import OpenDispute from "./app/Screens/Dispute/OpenDispute";
import ClosedDisputes from "./app/Screens/Dispute/ClosedDisputes";
import DisputeNav from "./app/Navigation/DisputeNav";
import OrderDetails from "./app/Screens/Orders/OrderDetails";
import DisputeDetails from "./app/Screens/Dispute/DisputeDetails";
import Notifications from "./app/Screens/Others/Notifications";
import OtherServices from "./app/Screens/Others/OtherServices";
import Messages from "./app/Screens/Messages";
import Negotiations from "./app/Screens/Negotiations";
import { NegotiationItem } from "./app/Components/MessageItem";
import MessageNav from "./app/Navigation/MessagesNav";
import Delivery from "./app/Screens/Delivery/Delivery";
import RegBusiness from "./app/Screens/MerchantAccount/RegBusiness";

export default function App() {
  const [fontsLoaded] = useFonts({
    "lato-regular": require("./app/assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "dm-sans": require("./app/assets/fonts/DMSans-Regular.ttf"),
    "dm-medium": require("./app/assets/fonts/DMSans-Medium.ttf"),
  });
  if (!fontsLoaded) return null;

  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar style="dark" />
      {/* <Delivery /> */}
      <RegBusiness />

      {/* <OrderDetails /> */}
      {/* <DisputeDetails /> */}
      {/* <Notifications /> */}
      {/* <OtherServices /> */}
      {/* <Messages /> */}
      {/* <Negotiations /> */}
      {/* <NegotiationItem /> */}
      {/* <NavigationContainer theme={NavTheme}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Markets"
            component={MarketNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-city"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="shopping-bag" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Disputes"
            component={DisputeNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="shopping-bag" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={MessageNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="shopping-bag" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({});

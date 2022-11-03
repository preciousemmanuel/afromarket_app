import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import NavTheme from "./app/Navigation/NavTheme";
import ProductNav from "./app/Navigation/ProductNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderNav from "./app/Navigation/OrderNav";
import MarketNav from "./app/Navigation/MarketNav";
import Colors from "./app/Config/Colors";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import RegBusiness from "./app/Screens/MerchantAccount/RegBusiness";
import DrawerNav from "./app/Navigation/DrawerNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./app/Navigation/BottomNav";
import WelcomeNav from "./app/Navigation/WelcomeNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    "lato-regular": require("./app/assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "dm-sans": require("./app/assets/fonts/DMSans-Regular.ttf"),
    "dm-medium": require("./app/assets/fonts/DMSans-Medium.ttf"),
  });
  if (!fontsLoaded) return null;

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      {/* <RegBusiness /> */}
      <NavigationContainer theme={NavTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcoming" component={WelcomeNav} />
          <Stack.Screen name="appNav" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

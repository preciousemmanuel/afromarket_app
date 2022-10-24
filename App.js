import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { OtpCard } from "./app/Screens/Cart_delivery/AddCard";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import Merchant from "./app/Screens/Merchant";
import AppInput from "./app/Components/AppInput";
import Login from "./app/Screens/Auth/Login";
import Register from "./app/Screens/Auth/Register";
import Details from "./app/Screens/Auth/Details";
import Done from "./app/Screens/Done";
import Onboarding from "./app/Screens/MerchantAccount/Onboarding";
import RegBusiness from "./app/Screens/MerchantAccount/RegBusiness";
import BusDoc, { BusImage } from "./app/Screens/MerchantAccount/BusDoc";
import Card from "./app/Components/Card";
import Markets from "./app/Screens/Markets";
import MarketDetails from "./app/Screens/MarketDetails";
import Chat from "./app/Screens/Chat";
import ListingDetails from "./app/Screens/ListingDetails";
import Cart from "./app/Screens/Cart_delivery/Cart";
import DeliverAddress from "./app/Screens/Cart_delivery/DeliverAddress";
import SelectAddress from "./app/Screens/Cart_delivery/SelectAddress";
import NewAddress from "./app/Screens/Cart_delivery/NewAddress";
import PayDetails from "./app/Screens/Cart_delivery/PayDetails";
import AddCard from "./app/Screens/Cart_delivery/AddCard";
import OrderComplete from "./app/Screens/Cart_delivery/OrderComplete";
import OpenOrders from "./app/Screens/Orders/OpenOrders";
import DisputedOrders from "./app/Screens/Orders/Disputed";
import { NavigationContainer } from "@react-navigation/native";
import TopBarNav from "./app/Navigation/TopBarNav";
import NavTheme from "./app/Navigation/NavTheme";
import OrderDetails from "./app/Screens/Orders/OrderDetails";
export default function App() {
  const [fontsLoaded] = useFonts({
    "lato-regular": require("./app/assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "dm-sans": require("./app/assets/fonts/DMSans-Regular.ttf"),
    "dm-medium": require("./app/assets/fonts/DMSans-Medium.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar style="dark" />
      <OrderDetails />
      {/* <StatusBar style="dark" />
      <NavigationContainer theme={NavTheme}>
        <TopBarNav />
      </NavigationContainer> */}
      {/* <Card /> */}
      {/* <MarketDetails /> */}
      {/* <Chat /> */}
      {/* <Cart /> */}
      {/* <DeliverAddress /> */}
      {/* <SelectAddress /> */}
      {/* <NewAddress /> */}
      {/* <PayDetails /> */}
      {/* <AddCard /> */}
      {/* <OtpCard /> */}
      {/* <OpenOrders /> */}
      {/* <DisputedOrders /> */}
      {/* <OrderComplete /> */}
      {/* <ListingDetails /> */}
      {/* <Merchant /> */}
      {/* <Register /> */}
      {/* <RegBusiness /> */}
      {/* <Done /> */}
      {/* <WelcomeScreen /> */}
      {/* <Details /> */}
      {/* <Login /> */}
    </>
  );
}

const styles = StyleSheet.create({});

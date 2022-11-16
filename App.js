import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import NavTheme from "./app/Navigation/NavTheme";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNav from "./app/Navigation/DrawerNav";
import WelcomeNav from "./app/Navigation/WelcomeNav";
import AuthContext from "./app/Context/AuthContext";
import { useCallback, useEffect, useState } from "react";
import Storage from "./app/Context/Storage";
import jwtDecode from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [user, setUser] = useState();
  const restoreToken = async () => {
    const token = await Storage.getToken();
    if (!token) {
      return onLayOutRootView();
    }
    setUser(jwtDecode(token));
    onLayOutRootView();
  };
  useEffect(() => {
    restoreToken();
  }, []);

  const [fontsLoaded] = useFonts({
    "lato-regular": require("./app/assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "dm-sans": require("./app/assets/fonts/DMSans-Regular.ttf"),
    "dm-medium": require("./app/assets/fonts/DMSans-Medium.ttf"),
  });
  const onLayOutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  if (!fontsLoaded) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavTheme}>
        {/* <RegBusiness /> */}
        <StatusBar style="dark" />
        {user ? <DrawerNav /> : <WelcomeNav />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});

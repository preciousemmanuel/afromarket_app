import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "../Config/Colors";
import CustomDrawer from "../Screens/CustomDrawer";
import Notifications from "../Screens/Others/Notifications";
import OtherServices from "../Screens/Others/OtherServices";
import BottomNav from "./BottomNav";
import DisputeNav, { DisputesNav } from "./DisputeNav";
import MarketNav from "./MarketNav";
import MessageNav, { NotNav } from "./MessagesNav";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "lato-bold",
        },
        drawerActiveBackgroundColor: Colors.white,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.white,
        headerTitleStyle: {
          color: Colors.white,
        },
        drawerStyle: {
          backgroundColor: Colors.primary,
          flex: 1,
        },
        drawerItemStyle: {
          width: 200,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNav}
        options={{
          headerShown: false,
          headerShadowVisible: false,

          drawerLabel: "Home",
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={focused ? Colors.primary : Colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="bell"
              size={size}
              color={focused ? Colors.primary : Colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Disputes"
        component={DisputesNav}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="legal"
              size={size}
              color={focused ? Colors.primary : Colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="messagesS"
        component={MessageNav}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-chatbox-ellipses"
              size={size}
              color={focused ? Colors.primary : Colors.white}
            />
          ),
          drawerLabel: "Messages",
        }}
      />
      <Drawer.Screen
        name="others"
        component={OtherServices}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? Colors.primary : Colors.white}
            />
          ),
          drawerLabel: "Other Services",
        }}
      />
    </Drawer.Navigator>
  );
}

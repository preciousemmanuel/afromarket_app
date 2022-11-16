import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppText, { MeidumText } from "../Components/AppText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import AuthContext from "../Context/AuthContext";
import Storage from "../Context/Storage";
export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    Storage.removeToken();
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <DrawerContentScrollView {...props}>
        <View style={{ padding: 10 }}>
          <Feather
            name="x"
            size={30}
            color={Colors.white}
            onPress={() => props.navigation.closeDrawer()}
          />
          <MeidumText
            text="Menu"
            style={{ color: Colors.white, paddingVertical: 30 }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            backgroundColor: Colors.white,
            padding: 10,
            width: 200,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/rider.jpg")}
            style={{ width: 49, height: 49, borderRadius: 40 }}
          />
          <View style={{ marginLeft: 5 }}>
            <MeidumText text="John doe" style={{ fontSize: 18 }} />

            <AppText text="View Profile" />
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 40 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <Ionicons name="ios-log-out" size={30} color="#fff" />
        <AppText text="Sign Out" style={{ color: Colors.white }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});

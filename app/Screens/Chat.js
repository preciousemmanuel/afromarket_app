import {
  Image,
  StyleSheet,
  View,
  Platform,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screen from "./Screen";
import { MeidumText } from "../Components/AppText";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppInput from "../Components/AppInput";
export default function Chat() {
  return (
    <Screen>
      <View style={styles.top}>
        <TouchableHighlight
          underlayColor={Colors.light}
          onPress={() => console.log("first")}
          style={{ padding: 15, borderRadius: 25 }}
        >
          <SimpleLineIcons name="arrow-left" color={Colors.black} size={20} />
        </TouchableHighlight>
        <View style={styles.flexRow}>
          <Image
            source={require("../assets/afroimage3.jpg")}
            style={styles.profPic}
          />
          <MeidumText text="John Doe" style={{ fontSize: 18 }} />
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="phone"
              color={Colors.primary}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="video"
              color={Colors.primary}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: Colors.light }}></View>
      <View style={styles.footer}>
        <View style={styles.imgPlus}>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color={Colors.primary}
          />
        </View>
        <AppInput
          placeholder="Type message.."
          style={{ width: "75%", paddingVertical: 10, borderWidth: 0 }}
          keyboardType="web-search"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imgPlus: {
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 3,
    backgroundColor: Colors.light,
    width: "16%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  footer: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profPic: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 8,
  },
});

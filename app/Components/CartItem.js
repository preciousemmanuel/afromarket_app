import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Config/Colors";
import AppText, { MeidumText } from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function CartItem() {
  return (
    <View style={styles.CartItem}>
      <Image source={require("../assets/image5.jpg")} style={styles.img} />
      <View style={{ paddingHorizontal: 15 }}>
        <MeidumText text="iPhone 11 Green 64GB" style={{ fontSize: 20 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            borderLeftColor: Colors.white,
            borderRightColor: Colors.white,
            borderBottomColor: Colors.light,
            borderTopColor: Colors.light,
            borderWidth: 2,
            padding: 10,
            width: "75%",
          }}
        >
          <View style={styles.increment}>
            <MaterialCommunityIcons
              name="plus-box"
              size={24}
              style={{ borderRadius: 8 }}
            />
            <MeidumText
              text="1"
              style={{ fontSize: 16, paddingHorizontal: 8 }}
            />
            <MaterialCommunityIcons name="minus-box" size={24} />
          </View>
          <MeidumText
            text="450,000"
            style={{ fontSize: 18, color: Colors.primary }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  increment: {
    flexDirection: "row",
    alignItems: "center",
  },
  CartItem: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: Colors.white,
    height: 130,
    flexDirection: "row",
  },
});

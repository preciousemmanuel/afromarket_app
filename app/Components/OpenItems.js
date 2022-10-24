import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";

export default function OpenItems() {
  return (
    <View style={styles.item}>
      <Image source={require("../assets/image5.jpg")} style={styles.img} />
      <View style={styles.txtCont}>
        <View>
          <MeidumText text="iPhone 11 Green 64GB" style={{ fontSize: 19 }} />
          <AppText text="Order #1234667" />
          <AppText text="Pending" style={styles.label} />
        </View>
        <AppText text="Delivering on Friday, May 1, 2022" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    textAlign: "center",
    padding: 10,
    backgroundColor: Colors.primary,
    width: 90,
    borderRadius: 6,
  },
  item: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.light,
    height: 125,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  img: {
    borderRadius: 5,
    width: 80,
    height: 80,
  },
  txtCont: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

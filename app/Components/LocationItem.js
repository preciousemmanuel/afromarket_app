import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";

export default function LocationItem({ street, city, price }) {
  return (
    <View style={styles.item}>
      <View>
        <MeidumText text={street} />
        <AppText text={city} />
      </View>
      <MeidumText text={price} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 86,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 7,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

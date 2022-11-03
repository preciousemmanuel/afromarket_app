import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Config/Colors";
import AppText from "./AppText";
// import Icon from "./Icon";

export default function PickerItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <AppText text={item.label} style={styles.PickerItem} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PickerItem: {
    padding: 16,
    color: Colors.dark_g,
    fontWeight: "bold",
    fontSize: 18,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Config/Colors";

export default function AppText({ text, style }) {
  return (
    <View>
      <Text numberOfLines={2} style={[styles.regular, style]}>
        {text}
      </Text>
    </View>
  );
}

export const BoldText = ({ text }) => {
  return (
    <View>
      <Text style={styles.bold}>{text}</Text>
    </View>
  );
};
export const MeidumText = ({ text, style }) => {
  return (
    <View>
      <Text style={[styles.medium, style]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "lato-regular",
    lineHeight: 19,
    color: Colors.black,
  },
  bold: {
    fontSize: 45,
    fontWeight: "600",
    fontFamily: "lato-bold",
    lineHeight: 60,
    color: Colors.black,
  },
  medium: {
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "lato-bold",
    lineHeight: 30,
    color: Colors.black,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../Config/Colors";

export default function Line({ start, stop, style }) {
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.medium]}
      style={[styles.button, style]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[start, stop]}
    >
      <View style={{ height: 4 }}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
});

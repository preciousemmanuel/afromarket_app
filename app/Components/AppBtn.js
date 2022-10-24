import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppText from "./AppText";

export default function AppBtn({ title, handlePress, color, style }) {
  return (
    <TouchableOpacity
      style={[{ ...styles.buttonContainer, backgroundColor: color }, style]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export const OutlineBtn = ({
  title,
  handlePress,
  color,
  style,
  iconName,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          ...styles.buttonContainer,
          borderColor: Colors.primary,
          borderWidth: 1,
        },
        style,
      ]}
      onPress={handlePress}
    >
      {iconName && (
        <MaterialCommunityIcons name={iconName} size={28} color={iconColor} />
      )}
      <AppText
        text={title}
        style={[styles.text, { color, fontWeight: "200", marginLeft: 6 }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    fontStyle: "normal",
    color: Colors.white,
    fontSize: 16,
    fontFamily: "dm-medium",
    fontWeight: "bold",
  },
});

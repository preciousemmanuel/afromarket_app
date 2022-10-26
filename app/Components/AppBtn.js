import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppText from "./AppText";

export default function AppBtn({
  title,
  handlePress,
  color = Colors.primary,
  style,
}) {
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
  iconFam,
  icon,
  feather,
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
        <MaterialCommunityIcons name={iconName} size={25} color={iconColor} />
      )}
      {iconFam && <Ionicons name={iconFam} size={25} color={iconColor} />}
      {icon && <AntDesign name={icon} size={25} color={iconColor} />}
      {feather && <Feather name={feather} size={25} color={iconColor} />}

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

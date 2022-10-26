import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import Colors from "../Config/Colors";

export default function ImagePicker({ handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.imageInput}>
        <Ionicons name="image" size={28} color={Colors.dark} />
        <AppText text="Upload image" style={{ marginTop: 8 }} />
      </View>
    </TouchableOpacity>
  );
}

export function LargeImagePicker({ handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.imageInput, styles.large]}>
        <Ionicons name="image" size={28} color={Colors.dark} />
        <AppText text="Upload image" style={{ marginTop: 8 }} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  imageInput: {
    marginTop: 10,
    backgroundColor: Colors.medium,
    justifyContent: "center",
    alignItems: "center",
    width: 182,
    height: 150,
    // padding: 30,
    borderRadius: 8,
  },
  large: {
    height: 310,
    width: 182,
  },
});

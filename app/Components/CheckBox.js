import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
export default function CheckBox({ text }) {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.flex}>
      <Pressable onPress={() => setCheck((prevState) => !prevState)}>
        {check ? (
          <Ionicons name="checkbox" size={24} color={Colors.primary} />
        ) : (
          <View style={styles.checkBox}></View>
        )}
      </Pressable>
      <AppText
        text={text}
        style={check ? { fontWeight: "700", fontSize: 15 } : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    marginRight: 5,
    borderRadius: 4,
    borderWidth: 1,
    width: 20,
    height: 20,
    justifyContent: "center",
  },
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../Config/Colors";
import { Ionicons } from "@expo/vector-icons";
export default function AppInput({
  style,
  handleBlur,
  iconName,
  ...otherProps
}) {
  const [focus, setFocus] = useState(false);

  const changeBlur = () => {
    handleBlur();
    setFocus(false);
  };
  return (
    <View style={[styles.container, style, focus ? styles.border : null]}>
      <Ionicons name={iconName} size={28} color={Colors.black} />
      <TextInput
        {...otherProps}
        multiline
        onFocus={() => setFocus(true)}
        onBlur={changeBlur}
        style={styles.TextInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: Colors.primary,
    borderWidth: 1.2,
  },
  container: {
    width: "100%",
    backgroundColor: Colors.medium,
    borderRadius: 5,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  TextInput: {
    flex: 1,
    color: Colors.black,
    fontSize: 16,
    fontFamily: "lato-regular",
    paddingLeft: 6,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NewRateCard() {
  return (
    <View style={styles.main}>
      <AppFormField />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

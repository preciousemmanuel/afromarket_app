import React from "react";
import { View, StyleSheet } from "react-native";

function ListItmSep() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#d3d3d3",
  },
});
export default ListItmSep;

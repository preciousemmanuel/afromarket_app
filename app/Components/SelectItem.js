import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText, { BoldText, MeidumText } from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
export default function SelectItem({ selected, title, subTitle, iconName }) {
  return (
    <View style={styles.select}>
      <MaterialCommunityIcons name={iconName} size={25} />
      <View style={styles.txtCont}>
        <MeidumText text={title} style={{ fontSize: 19, marginBottom: 8 }} />
        <AppText text={subTitle} />
      </View>
      <View style={styles.selectItem}>
        <View style={selected ? styles.selectedItem : null}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtCont: {
    width: "60%",
  },
  select: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    justifyContent: "center",
    alignItems: "center",
    width: 16,
    height: 16,
    borderRadius: 35,
    backgroundColor: Colors.primary,
  },
  selectItem: {
    justifyContent: "center",
    alignItems: "center",
    width: 23,
    height: 23,
    borderRadius: 35,
    borderWidth: 1.8,
    borderColor: Colors.black,
  },
});

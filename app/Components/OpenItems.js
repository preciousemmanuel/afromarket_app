import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";

export default function OpenItems({
  title,
  subTitle,
  date,
  label,
  labelColor,
}) {
  return (
    <View style={styles.item}>
      <Image source={require("../assets/image5.jpg")} style={styles.img} />
      <View style={styles.txtCont}>
        <View>
          <MeidumText text={title} style={{ fontSize: 19 }} />
          <AppText
            text={subTitle}
            style={{ fontSize: 12, fontWeight: "400" }}
          />
          <AppText
            text={label}
            style={[styles.label, { backgroundColor: labelColor }]}
          />
        </View>
        <AppText text={`Delivering on ${date}`} style={{ fontSize: 14 }} />
      </View>
    </View>
  );
}
export function Items({ title, subTitle, date, label, labelColor }) {
  return (
    <View style={styles.item}>
      <Image source={require("../assets/image5.jpg")} style={styles.img} />
      <View style={styles.txtCont}>
        <View>
          <MeidumText text={title} style={{ fontSize: 19 }} />
          <AppText
            text={label}
            style={[styles.label, { backgroundColor: labelColor }]}
          />
        </View>

        <AppText text={subTitle} style={{ fontSize: 14 }} />
        <AppText text={date} style={{ fontSize: 14 }} />
      </View>
    </View>
  );
}
export function ProductItems({ title, subTitle, label, style, img }) {
  return (
    <View style={[styles.item, { height: 100 }, style]}>
      {img && (
        <Image source={require("../assets/image5.jpg")} style={styles.img} />
      )}
      <View style={styles.txtCont}>
        {/* <View> */}
        <MeidumText text={title} style={{ fontSize: 19 }} />
        {label && <AppText text={label} />}
        {/* </View> */}

        <MeidumText
          text={subTitle}
          style={{ fontSize: 19, color: Colors.primary }}
        />
        {/* <AppText text={date} style={{ fontSize: 14 }} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    textAlign: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    minWidth: 90,
    maxWidth: 120,
    borderRadius: 6,
  },
  item: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.white,
    height: 125,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  img: {
    borderRadius: 5,
    width: 80,
    height: 80,
  },
  txtCont: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

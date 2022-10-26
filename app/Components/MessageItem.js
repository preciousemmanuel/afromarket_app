import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";

export default function MessageItem({ name, message, time }) {
  return (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/image5.jpg")} style={styles.img} />
        <View style={{ paddingLeft: 5 }}>
          <MeidumText text={name} style={{ fontSize: 18, padding: 5 }} />
          <AppText text={message} txtStyle={{ width: "90%" }} />
        </View>
      </View>
      <AppText
        text={time}
        style={{ textAlign: "right", padding: 10, marginRight: -10 }}
      />
    </View>
  );
}

export function NegotiationItem({ price, bargain, time, status, title }) {
  return (
    <View style={styles.negotiate}>
      <Image
        source={require("../assets/image5.jpg")}
        style={[styles.img, { borderRadius: 0 }]}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <MeidumText text={title} style={{ fontSize: 18.5 }} />
        <AppText text={`Price: ${price}`} />
        <AppText text={`Bargain: ${price}`} />
        <AppText text={time} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  negotiate: {
    flexDirection: "row",
    width: "100%",
    height: 131,
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  item: {
    width: "100%",
    height: 155,
    marginTop: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  img: {
    borderRadius: 35,
    width: 60,
    height: 60,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign, Feather } from "@expo/vector-icons";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";
import Screen from "../Screens/Screen";

export default function Card({ title, address, img, style, imgStyle }) {
  return (
    <View style={[styles.card, style]}>
      <View>
        <Image source={img} style={[styles.img, imgStyle]} resizeMode="cover" />
      </View>
      <View style={styles.txtContainer}>
        <MeidumText text="Mr Gadgets" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 9,
          }}
        >
          <Feather name="map-pin" size={20} color={Colors.black} />
          <AppText text="9,Ebinipenjo Lane, Idumota, Lagos" />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="staro" size={20} color={Colors.black} />
          <AppText text="  4.2" />
          <AppText text="  12 Reviews" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "column",
    height: 270,
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  txtContainer: {
    padding: 10,
  },
});

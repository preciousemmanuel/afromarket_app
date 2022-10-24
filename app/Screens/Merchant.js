import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import { LinearGradient } from "expo-linear-gradient";
import AppText, { BoldText } from "../Components/AppText";
import AppBtn from "../Components/AppBtn";
import Line from "../Components/Line";

export default function Merchant() {
  return (
    <Screen>
      <Image
        source={require("../assets/afroimage2.png")}
        resizeMode="cover"
        blurRadius={0.3}
        style={styles.img}
      />
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 1)"]}
        style={styles.txtContainer}
      >
        <View style={{ padding: 15 }}>
          <BoldText text="Become a" />
          <BoldText text="merchant" />
          <View style={{ height: 10 }}></View>
          <AppText text="Start selling and making money" />
          <AppText text="on our  platform" />
          <Line start={1} stop={1} />
        </View>
      </LinearGradient>
      <View style={styles.btnContainer}>
        <AppBtn title="Get Started" color="green" style={styles.btn} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 380,
  },
  txtContainer: {
    marginTop: -30,
    height: 450,
    width: "100%",
  },
  btn: {
    position: "absolute",
    bottom: 130,
  },
  btnContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

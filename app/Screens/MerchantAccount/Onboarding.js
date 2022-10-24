import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import Screen from "../Screen";
import Line from "../../Components/Line";
import AppText, { BoldText } from "../../Components/AppText";
import AppBtn from "../../Components/AppBtn";

export default function Onboarding() {
  return (
    <Screen>
      <Image
        source={require("../../assets/afroimage4.png")}
        resizeMode="cover"
        blurRadius={0.3}
        style={styles.img}
      />
      <LinearGradient
        colors={["#dbd", "#d7d6d6", "#f8faf9"]}
        locations={[0, 0.1, 0]}
        style={styles.txtContainer}
      >
        <View style={{ padding: 15 }}>
          <BoldText text="Become a" />
          <BoldText text="Merchant" />
          <View style={{ height: 10 }}></View>
          <AppText text="Start selling and making money" />
          <AppText text="on our platform" />
          <Line start={0} stop={0.6} />
        </View>
      </LinearGradient>
      <View style={styles.btnContainer}>
        <AppBtn title="Next" color="green" style={styles.btn} />
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

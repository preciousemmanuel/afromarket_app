import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import { LinearGradient } from "expo-linear-gradient";
import AppText, { BoldText } from "../Components/AppText";
import AppBtn from "../Components/AppBtn";

export default function Done() {
  return (
    <Screen>
      <Image
        source={require("../assets/afroimage3.jpg")}
        resizeMode="cover"
        blurRadius={0.3}
        style={styles.img}
      />
      <LinearGradient
        colors={["#eee", "rgba(255, 255, 255, 1)"]}
        style={styles.txtContainer}
      >
        <View style={{ padding: 15 }}>
          <BoldText text="You're good" />
          <BoldText text="to go" />
          <View style={{ height: 10 }}></View>
          <AppText text="Now you can use our" />
          <AppText text=" platform to its fullest" />
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

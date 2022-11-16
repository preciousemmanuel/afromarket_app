import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import { LinearGradient } from "expo-linear-gradient";
import AppText, { BoldText } from "../Components/AppText";
import AppBtn from "../Components/AppBtn";
import Line from "../Components/Line";
import Colors from "../Config/Colors";

export default function Merchant({ navigation }) {
  return (
    <ScrollView>
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
        <AppBtn
          title="Merchant Login"
          color={Colors.primary}
          handlePress={() => navigation.navigate("merchantlogin")}
        />
        <AppBtn
          title="Get Started"
          color={Colors.primary}
          handlePress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
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
  // btn: {},
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 100,
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

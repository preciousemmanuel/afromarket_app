import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import Screen from "../Screen";
import Line from "../../Components/Line";
import AppText, { BoldText } from "../../Components/AppText";
import AppBtn from "../../Components/AppBtn";
import Colors from "../../Config/Colors";

const { width, height } = Dimensions.get("window");
export default function Onboarding({ handleNextStep }) {
  return (
    <View style={styles.main}>
      <Image
        source={require("../../assets/afroimage4.png")}
        resizeMode="cover"
        blurRadius={0.3}
        style={styles.img}
      />
      <LinearGradient
        colors={["#a9a9a9", "#fff", "#f8faf9"]}
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
        <AppBtn
          title="Next"
          color={Colors.primary}
          style={styles.btn}
          handlePress={handleNextStep}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: height,
  },
  img: {
    width: "100%",
    height: "50%",
  },
  txtContainer: {
    marginTop: -30,
    height: 450,
    width: "100%",
    opacity: 0.9,
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

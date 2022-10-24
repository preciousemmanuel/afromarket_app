import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import { LinearGradient } from "expo-linear-gradient";
import { MeidumText } from "../../Components/AppText";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Colors from "../../Config/Colors";

export default function OrderComplete() {
  return (
    <Screen>
      <Image
        source={require("../../assets/orderDone.jpg")}
        resizeMode="cover"
        blurRadius={0.3}
        style={styles.img}
      />
      <LinearGradient
        colors={["#eee", "rgba(255, 255, 255, 1)"]}
        style={styles.txtContainer}
      >
        <View style={{ padding: 15 }}>
          <MeidumText
            text="Order successfully created"
            style={{ textAlign: "center" }}
          />
          <View style={{ height: 10 }}></View>
          <MeidumText
            text="You can track your order to check"
            style={{ fontSize: 16, textAlign: "center" }}
          />
          <MeidumText
            text="it's progress"
            style={{ fontSize: 16, textAlign: "center" }}
          />
          <OutlineBtn
            style={{ marginTop: 40, height: 40 }}
            title="Track Order"
            color={Colors.primary}
            iconName="cube-outline"
            iconColor={Colors.primary}
          />
        </View>
      </LinearGradient>
      <View style={styles.btnContainer}>
        <AppBtn title="Continue" color="green" style={styles.btn} />
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

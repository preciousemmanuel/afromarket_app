import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import Screen from "../Screen";
import Line from "../../Components/Line";
import AppText, { BoldText } from "../../Components/AppText";
import AppBtn from "../../Components/AppBtn";

export default function BidAccepted() {
  return (
    <Screen>
      <View style={styles.main}>
        <LinearGradient
          colors={["#fff", "#fff", "#fff"]}
          locations={[0, 0.1, 0]}
          style={styles.txtContainer}
        >
          <View style={{ padding: 15 }}>
            <BoldText text="Bid Accepted" />
            <View style={{ height: 10 }}></View>
            <AppText text="The Buyer Will be notified" />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.btnContainer}>
        <AppBtn title="Continue" color="green" style={styles.btn} />
      </View>
    </Screen>
  );
}
export function BidRejected() {
  return (
    <Screen>
      <View style={styles.main}>
        <LinearGradient
          colors={["#fff", "#fff", "#fff"]}
          locations={[0, 0.1, 0]}
          style={styles.txtContainer}
        >
          <View style={{ padding: 15 }}>
            <BoldText text="Bid Rejected" />
            <View style={{ height: 10 }}></View>
            <AppText text="The Buyer Will be notified" />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.btnContainer}>
        <AppBtn title="Continue" color="green" style={styles.btn} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txtContainer: {
    width: "100%",
  },

  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

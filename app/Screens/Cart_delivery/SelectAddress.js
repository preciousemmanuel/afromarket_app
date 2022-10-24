import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../Screen";
import Colors from "../../Config/Colors";
import AppText, { MeidumText } from "../../Components/AppText";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SelectAddress() {
  return (
    <Screen>
      <View style={styles.top}>
        <TouchableHighlight
          underlayColor={Colors.light}
          onPress={() => console.log("first")}
          style={{ padding: 15, borderRadius: 25 }}
        >
          <SimpleLineIcons name="arrow-left" color={Colors.black} size={20} />
        </TouchableHighlight>
        <View style={styles.flexRow}>
          <MeidumText text="Select Delivery Address" style={{ fontSize: 18 }} />
        </View>
        <View></View>
      </View>
      <ScrollView style={styles.main}>
        <View style={{ marginTop: 50 }}>
          <View style={styles.delivery}>
            <MeidumText
              text="John Doe"
              style={{ fontSize: 18, fontWeight: "300" }}
            />
            <AppText
              text="30 Turnbull Road, Ikoyi"
              style={{ fontSize: 18, fontWeight: "400", paddingTop: 10 }}
            />
            <AppText
              text="Lagos, Nigeria"
              style={{ fontSize: 18, fontWeight: "400", paddingVertical: 8 }}
            />
            <TouchableOpacity>
              <MeidumText
                text="Select this Address"
                style={styles.tapToChange}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            backgroundColor: Colors.white,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={28}
              color={Colors.primary}
            />
            <MeidumText
              text="Add New Address"
              style={{ paddingLeft: 8, fontSize: 20, color: Colors.primary }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  main: {
    height: "100%",
    flex: 1,
    backgroundColor: Colors.light,
    paddingBottom: 80,
  },
  delivery: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  tapToChange: {
    textAlign: "center",
    borderTopColor: Colors.light,
    borderTopWidth: 1.9,
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "400",
    paddingVertical: 8,
    paddingTop: 15,
  },
});

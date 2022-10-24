import { ScrollView, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import Colors from "../../Config/Colors";
import AppText, { MeidumText } from "../../Components/AppText";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Screen from "../Screen";
import AppInput from "../../Components/AppInput";
import AppBtn from "../../Components/AppBtn";
export default function AddCard() {
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
          <MeidumText text="Add Card" style={{ fontSize: 19 }} />
        </View>
        <View></View>
      </View>
      <ScrollView style={styles.main}>
        <View>
          <AppInput
            style={{ backgroundColor: Colors.medium }}
            placeholder="Card Number"
          />
          <View style={{ flexDirection: "row" }}>
            <AppInput
              style={{ backgroundColor: Colors.medium, width: "45%" }}
              placeholder="Exp"
            />
            <AppInput
              style={{
                backgroundColor: Colors.medium,
                width: "47%",
                marginLeft: 20,
              }}
              placeholder="CVV"
            />
          </View>

          <AppInput
            style={{
              backgroundColor: Colors.medium,
            }}
            placeholder="PIN"
          />
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <AppBtn
          title="Save Changes"
          color={Colors.primary}
          style={{ height: 50 }}
        />
      </View>
    </Screen>
  );
}

export function OtpCard() {
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
          <MeidumText text="Add Card" style={{ fontSize: 19 }} />
        </View>
        <View></View>
      </View>
      <ScrollView style={styles.main}>
        <View>
          <AppText
            text="An OTP has been sent to your number"
            style={{ fontSize: 18, paddingTop: 8 }}
          />
          <AppText
            text="kindly input it to confirm card"
            style={{ fontSize: 18, paddingTop: 8 }}
          />
          <AppInput
            style={{ backgroundColor: Colors.medium }}
            placeholder="OTP"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <AppBtn
          title="Save Changes"
          color={Colors.primary}
          style={{ height: 50 }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  main: {
    padding: 15,
    flex: 1,
    backgroundColor: "#e5e5e5",
    paddingBottom: 200,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

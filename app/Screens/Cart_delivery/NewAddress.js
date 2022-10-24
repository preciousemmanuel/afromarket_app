import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Config/Colors";
import { MeidumText } from "../../Components/AppText";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Screen from "../Screen";
import AppInput from "../../Components/AppInput";
import AppBtn from "../../Components/AppBtn";
export default function NewAddress() {
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
          <MeidumText text="Add New Address" style={{ fontSize: 19 }} />
        </View>
        <View>
          <Feather name="x" color={Colors.black} size={20} />
        </View>
      </View>
      <ScrollView style={styles.main}>
        <View>
          <AppInput
            style={{ backgroundColor: Colors.medium }}
            placeholder="First Name"
          />
          <AppInput
            style={{ backgroundColor: Colors.medium }}
            placeholder="Last Name"
          />
          <AppInput
            style={{ backgroundColor: Colors.medium }}
            placeholder="Street Address"
          />
          <View style={{ flexDirection: "row" }}>
            <AppInput
              style={{ backgroundColor: Colors.medium, width: "45%" }}
              placeholder="City"
            />
            <AppInput
              style={{
                backgroundColor: Colors.medium,
                width: "47%",
                marginLeft: 20,
              }}
              placeholder="State"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <AppInput
              style={{ backgroundColor: Colors.medium, width: "25%" }}
              placeholder="+234"
            />
            <AppInput
              style={{
                backgroundColor: Colors.medium,
                width: "65%",
                marginLeft: 20,
              }}
              placeholder="xxx  xxx  xxx"
            />
          </View>
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

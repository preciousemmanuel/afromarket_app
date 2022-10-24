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
import SelectItem from "../../Components/SelectItem";

const pickUp = [
  {
    id: 1,
    title: "Door Delivery",
    subTitle: "A dispatch rider will bring your order to your address",
    iconName: "cube-outline",
    select: false,
  },
  {
    id: 2,
    title: "Station Pick-Up",
    subTitle: "You can pick your order at our station nearest to you",
    iconName: "truck-outline",
    select: false,
  },
];

export default function DeliverAddress() {
  const [selectedItem, setSelectedItem] = useState();
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
          <MeidumText text="Delivery Address" style={{ fontSize: 19 }} />
        </View>
        <View></View>
      </View>
      <ScrollView style={styles.main}>
        <View>
          <MeidumText
            text="Address Details"
            style={{ fontSize: 20, padding: 10, marginTop: 30 }}
          />
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
              <MeidumText text="Tap to Change" style={styles.tapToChange} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <MeidumText
            text="Delivery Details"
            style={{ fontSize: 20, padding: 10, marginTop: 20 }}
          />
          <FlatList
            data={pickUp}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  setSelectedItem(item.id);
                }}
              >
                <SelectItem
                  title={item.title}
                  subTitle={item.subTitle}
                  iconName={item.iconName}
                  selected={selectedItem === item.id ? true : false}
                />
              </TouchableHighlight>
            )}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  delivery: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
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
  tapToChange: {
    borderTopColor: Colors.light,
    borderWidth: 1.9,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "400",
    paddingVertical: 8,
  },
});

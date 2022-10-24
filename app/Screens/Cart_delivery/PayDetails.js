import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../Screen";
import { MeidumText } from "../../Components/AppText";
import SelectItem from "../../Components/SelectItem";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../Config/Colors";
const pickUp = [
  {
    id: 1,
    title: "Wallet Payment",
    subTitle: "Pay using your AfroMarket Wallet",
    iconName: "cube-outline",
    select: false,
  },
  {
    id: 2,
    title: "Card Payment",
    subTitle: "Pay with your debit/credit card",
    iconName: "credit-card-outline",
    select: false,
  },
  {
    id: 3,
    title: "Bank Transfer",
    subTitle: "Pay using USSD or Bank Transfer",
    iconName: "bank-outline",
    select: false,
  },
];
export default function PayDetails() {
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
      <View style={styles.main}>
        <View style={{ marginTop: 30 }}>
          <MeidumText
            text="Payment Type"
            style={{ fontSize: 20, padding: 10 }}
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
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

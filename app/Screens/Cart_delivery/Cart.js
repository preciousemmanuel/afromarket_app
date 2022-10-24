import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../Screen";
import Colors from "../../Config/Colors";

import { SimpleLineIcons } from "@expo/vector-icons";
import AppText, { MeidumText } from "../../Components/AppText";
import CartItem from "../../Components/CartItem";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";

export default function Cart() {
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
          <MeidumText text="My Cart" style={{ fontSize: 19 }} />
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <MeidumText text="Empty Cart" style={{ fontSize: 13 }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <View>
            <MeidumText
              text="Delivery Details"
              style={{ fontSize: 18, padding: 10, marginTop: 30 }}
            />
            <View style={styles.delivery}>
              <AppText
                text="You have no delivery address active"
                style={{ fontSize: 16, fontWeight: "300" }}
              />
              <OutlineBtn
                title="Set delivery address"
                color={Colors.primary}
                iconName="map-marker-outline"
                iconColor={Colors.primary}
                style={{ width: "60%" }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.white,
              marginTop: 40,
              padding: 10,
            }}
          >
            <View style={styles.deliveryBox}>
              <MeidumText text="Total Items" style={{ fontSize: 18 }} />
              <MeidumText text="450,000" style={{ fontSize: 20 }} />
            </View>
            <View style={styles.deliveryBox}>
              <MeidumText text="VAT" style={{ fontSize: 18 }} />
              <MeidumText text="1,000" style={{ fontSize: 20 }} />
            </View>
            <View style={styles.deliveryBox}>
              <MeidumText text="Delivery Fee" style={{ fontSize: 18 }} />
              <MeidumText text="0" style={{ fontSize: 20 }} />
            </View>
            <View style={styles.deliveryBox}>
              <MeidumText text="Total Fee" style={{ fontSize: 18 }} />
              <MeidumText text="451,000" style={{ fontSize: 20 }} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ padding: 20 }}>
        <AppBtn
          title="Checkout"
          color={Colors.primary}
          style={{ height: 60 }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  delivery: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingBottom: 80,
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
  profPic: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 8,
  },
  deliveryBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

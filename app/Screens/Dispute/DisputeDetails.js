import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Config/Colors";
import { Items, ProductItems } from "../../Components/OpenItems";
import { OutlineBtn } from "../../Components/AppBtn";
import AppText, { MeidumText } from "../../Components/AppText";

export default function DisputeDetails({ navigation }) {
  return (
    <ScrollView style={styles.main}>
      <Items
        title="Order #132347"
        label="Disputed"
        date="Order Made on Thursday, April 30, 2022"
        labelColor={Colors.danger}
      />
      <TouchableOpacity
        style={styles.ordDetails}
        onPress={() =>
          navigation.navigate("Orders", {
            screen: "orderDetails",
          })
        }
      >
        <MeidumText
          text="View Order Details"
          style={{ color: Colors.primary, textAlign: "center", fontSize: 20 }}
        />
      </TouchableOpacity>
      <View style={styles.details}>
        <MeidumText text="Wrong Order Delivery" style={{ fontSize: 20 }} />
        <AppText text="Dispute Type" />
        <View style={{ padding: 10 }} />
        <MeidumText text="Jan 25, 2022 | 4:30pm" style={{ fontSize: 20 }} />
        <AppText text="Date & Time" />
      </View>
      <View style={styles.details}>
        <AppText
          text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim dolorem fugiat! Veritatis, eum nam eligendi velit provident neque accusamus magni dolorum, earum ducimus ratione aut repudiandae! Quos, minima labore."
        />
        <AppText text="eum nam eligendi velit provident neque accusamus magni dolorum, earum ducimus ratione" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  details: {
    maxHeight: 152,
    padding: 15,
    marginTop: 40,
    backgroundColor: Colors.white,
  },
  ordDetails: {
    marginTop: -10,
    backgroundColor: Colors.white,
    padding: 20,
    borderTopWidth: 1.3,
    borderTopColor: Colors.light,
  },
  main: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.light,
  },
});

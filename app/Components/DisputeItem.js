import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppText, { MeidumText } from "./AppText";
export default function DisputeItem({
  details,
  title,
  subTitle,
  vendor,
  color,
  date,
}) {
  return (
    <View style={styles.item}>
      <View style={styles.icon}>
        <FontAwesome name="legal" size={20} color={Colors.white} />
      </View>
      <View>
        <MeidumText text={title} style={{ fontSize: 19 }} />
        <AppText text={subTitle} />
        <AppText
          text={`Vendor: ${vendor}`}
          number={1}
          style={{ width: "100%", paddingVertical: 5 }}
        />
        <AppText text={date} />
        {details && (
          <MeidumText
            text={details}
            style={{ fontSize: 16, color: Colors[color], marginTop: 5 }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    marginRight: 20,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    marginTop: 15,
    backgroundColor: Colors.white,
    flexDirection: "row",
    width: "100%",
  },
});

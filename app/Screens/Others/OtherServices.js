import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import { OutlineBtn } from "../../Components/AppBtn";
import Colors from "../../Config/Colors";

export default function OtherServices() {
  const Services = [
    {
      id: 1,
      title: "Phone Recharge",
      target: "",
    },
    {
      id: 2,
      title: "Afromobility",
      target: "",
    },
    {
      id: 3,
      title: "Tickets",
      target: "",
    },
    {
      id: 4,
      title: "Afromusic",
      target: "",
    },
    {
      id: 5,
      title: "Road & Flight",
      target: "",
    },
    {
      id: 6,
      title: "Haulage Service",
      target: "",
    },
    {
      id: 7,
      title: "Hotels",
      target: "",
    },
    {
      id: 8,
      title: "Utility Payment",
      target: "",
    },
    {
      id: 9,
      title: "Piggybacking",
      target: "",
    },
    {
      id: 10,
      title: "Counter trade",
      target: "",
    },
    {
      id: 11,
      title: "Consignment",
      target: "",
    },
    {
      id: 12,
      title: "Licensing",
      target: "",
    },
    {
      id: 13,
      title: "Franchising",
      target: "",
    },
    {
      id: 14,
      title: "Dealership",
      target: "",
    },
    {
      id: 15,
      title: "Join Venture",
      target: "",
    },
  ];
  return (
    <Screen>
      <ScrollView style={styles.main}>
        {Services.map((s) => (
          <OutlineBtn
            key={s.id}
            title={s.title}
            color={Colors.primary}
            style={{ justifyContent: "flex-start", paddingLeft: 10 }}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
});

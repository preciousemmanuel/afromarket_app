import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NegotiationItem } from "../Components/MessageItem";
import Colors from "../Config/Colors";
import AppInput from "../Components/AppInput";

export default function Negotiations() {
  const bargains = [
    {
      id: 1,
      name: "iPhone 11 64GB Green",
      bargain: 64000,
      price: 720000,
      time: "Now",
    },
    {
      id: 2,
      name: "iPhone 11 64GB Green",
      bargain: 64000,
      price: 720000,
      time: "Now",
    },
    {
      id: 3,
      name: "iPhone 11 64GB Green",
      bargain: 64000,
      price: 720000,
      time: "Now",
    },
    {
      id: 4,
      name: "iPhone 11 64GB Green",
      bargain: 64000,
      price: 720000,
      time: "Now",
    },
    {
      id: 5,
      name: "iPhone 11 64GB Green",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 6,
      name: "iPhone 11 64GB Green",
      bargain: 64000,
      price: 720000,
      time: "Now",
    },
  ];

  return (
    <View style={styles.main}>
      <AppInput
        placeholder="Search here now"
        style={{ backgroundColor: Colors.white }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {bargains.map((m) => (
          <View key={m.id}>
            <NegotiationItem
              title={m.name}
              price={m.price}
              bargain={m.bargain}
              time={m.time}
            />
          </View>
        ))}
        <View style={{ padding: 50 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

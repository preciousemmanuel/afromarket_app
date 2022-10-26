import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductItems } from "../../Components/OpenItems";
import Screen from "../Screen";
import Colors from "../../Config/Colors";

export default function Notifications() {
  const myProducts = [
    {
      id: 2,
      title: "There is an update on your Order",
      label: "Now",
      price: 450000,
    },
    {
      id: 3,
      title: "There is an update on your Order",
      label: "Now",
      price: 450000,
    },
    {
      id: 4,
      title: "There is an update on your Order",
      label: "Now",
      price: 450000,
    },
    {
      id: 5,
      title: "There is an update on your Order",
      label: "Now",
      price: 450000,
    },
    {
      id: 6,
      title: "There is an update on your Order",
      label: "Now",
      price: 450000,
    },
    {
      id: 7,
      title: "There is an update on your Order",

      label: "Active",
      price: 450000,
    },
    {
      id: 8,
      title: "There is an update on your Order",

      label: "Now",
      price: 450000,
    },
    {
      id: 9,
      title: "There is an update on your Order",

      label: "Now",
      date: "Friday May 1, 2022",
    },
    {
      id: 10,
      title: "There is an update on your Order",

      label: "Now",
      price: 450000,
    },
  ];
  return (
    <Screen>
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItems
              style={{ height: 80 }}
              title={item.title}
              label={item.label}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.light,
  },
});

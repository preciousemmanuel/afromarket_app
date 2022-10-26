import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductItems } from "../../Components/OpenItems";
import Screen from "../Screen";
import Colors from "../../Config/Colors";

export default function MyProduct() {
  const myProducts = [
    {
      id: 2,
      title: "iPhone 11 Green 64gb",
      label: "Mobile Phones",
      price: 450000,
    },
    {
      id: 3,
      title: "iPhone 11 Green 64gb",
      label: "Pending",
      price: 450000,
    },
    {
      id: 4,
      title: "iPhone 11 Green 64gb",
      label: "Mobile Phones",
      price: 450000,
    },
    {
      id: 5,
      title: "iPhone 11 Green 64gb",
      label: "Pending",
      price: 450000,
    },
    {
      id: 6,
      title: "iPhone 11 Green 64gb",
      label: "Mobile Phones",
      price: 450000,
    },
    {
      id: 7,
      title: "iPhone 11 Green 64gb",

      label: "Active",
      price: 450000,
    },
    {
      id: 8,
      title: "iPhone 11 Green 64gb",

      label: "Pending",
      price: 450000,
    },
    {
      id: 9,
      title: "iPhone 11 Green 64gb",

      label: "Pending",
      date: "Friday May 1, 2022",
    },
    {
      id: 10,
      title: "iPhone 11 Green 64gb",

      label: "Mobile Phones",
      price: 450000,
    },
  ];
  return (
    <>
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItems
              title={item.title}
              subTitle={item.price}
              label={item.label}
              img
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    // paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.light,
  },
});

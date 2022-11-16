import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductItems } from "../../Components/OpenItems";
import Screen from "../Screen";
import Colors from "../../Config/Colors";
import axios from "axios";
const url = "https://afromarket-be-ekn6j.ondigitalocean.app/";
export default function Categories() {
  const [prodCategories, setProdCategories] = useState(null);
  useEffect(() => {
    const HandleFetch = async () => {
      const { data } = await axios.get(
        `${url}afro-market/v1/category/all?limit=10&page=1`
      );
      setProdCategories(data.data.allCategories.data.rows);
      // console.log(data.data.products.data.rows);
    };
    HandleFetch();
    console.log(prodCategories);
  }, []);
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
          data={prodCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItems
              style={{ height: 80 }}
              title={item.name}
              // subTitle={item.price}
              label={item.description}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.light,
  },
});

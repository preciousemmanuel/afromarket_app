import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import OpenItems, { Items } from "../../Components/OpenItems";
import Screen from "../Screen";
import Colors from "../../Config/Colors";

export default function CloseOrders({ navigation }) {
  const items = [
    {
      id: 2,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 3,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 4,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 5,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 6,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 7,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 8,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 9,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
    {
      id: 10,
      title: "iPhone 11 Green 64gb",
      subtitle: "Order #123456",
      label: "Delivered",
      date: "Friday May 1, 2022",
    },
  ];
  return (
    <>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("orderDetails")}
            >
              <OpenItems
                labelColor={Colors.primary}
                label={item.label}
                title={item.title}
                subTitle={item.subtitle}
                date={item.date}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

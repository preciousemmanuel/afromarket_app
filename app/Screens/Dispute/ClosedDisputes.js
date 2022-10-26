import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import DisputeItem from "../../Components/DisputeItem";
import Colors from "../../Config/Colors";

export default function ClosedDisputes() {
  const items = [
    {
      id: 2,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
      details: "Won",
    },
    {
      id: 3,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
      details: "Lost",
    },
    {
      id: 4,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
      details: "Lost",
    },
    {
      id: 5,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
      details: "Won",
    },
    {
      id: 6,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
      details: "Lost",
    },
    {
      id: 7,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
      details: "Won",
    },
    {
      id: 8,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
      details: "Lost",
    },
    {
      id: 9,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
      details: "Won",
    },
    {
      id: 10,
      title: "Wrong Order",
      subtitle: "Order #123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
      details: "Won",
    },
  ];

  return (
    <View style={styles.list}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DisputeItem
            date={item.date}
            title={item.title}
            subTitle={item.subtitle}
            vendor={item.label}
            details={item.details}
            color={item.details === "Won" ? "primary" : "danger"}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

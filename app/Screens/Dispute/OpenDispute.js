import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import DisputeItem from "../../Components/DisputeItem";
import Colors from "../../Config/Colors";

export default function OpenDispute() {
  const items = [
    {
      id: 2,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 3,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 4,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 5,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 6,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 7,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 8,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 9,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "John Doe",
      date: "Friday May 1, 2022",
    },
    {
      id: 10,
      title: "Wrong Order",
      subtitle: "#123456",
      label: "Jane Doe",
      date: "Friday May 1, 2022",
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

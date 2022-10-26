import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageItem from "../Components/MessageItem";
import Colors from "../Config/Colors";
import AppInput from "../Components/AppInput";

export default function Messages() {
  const messages = [
    {
      id: 1,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 2,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 3,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 4,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 5,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
    {
      id: 6,
      sender: "Jane Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.um dolor sit amet consectetur adipisicing elit. Voluptatem, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
      time: "Now",
    },
  ];

  return (
    <View style={styles.main}>
      <AppInput
        placeholder="Search here"
        style={{ backgroundColor: Colors.white }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {messages.map((m) => (
          <MessageItem
            key={m.id}
            name={m.sender}
            time={m.time}
            message={m.message}
          />
        ))}
        <View style={{ padding: 50 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

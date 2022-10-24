import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OpenItems from "../../Components/OpenItems";
import Screen from "../Screen";

export default function OpenOrders() {
  return (
    <Screen>
      <OpenItems />
      <Text>OpenOrders</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});

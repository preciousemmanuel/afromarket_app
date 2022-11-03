import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppInput from "../../Components/AppInput";
import Colors from "../../Config/Colors";
import LocationItem from "../../Components/LocationItem";
import { Items } from "../../Components/OpenItems";
import Screen from "../Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Delivery({ navigation }) {
  const locations = [
    {
      id: 1,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
    {
      id: 2,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
    {
      id: 3,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
    {
      id: 4,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
    {
      id: 5,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
    {
      id: 6,
      street: "Ajah",
      city: "Lagos,Nigeria",
      price: "1,500",
    },
  ];
  return (
    <Screen>
      <MaterialCommunityIcons
        name="menu"
        size={30}
        style={{ margin: 10 }}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.main}>
        <AppInput
          placeholder="Search here"
          style={{ backgroundColor: Colors.white }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {locations.map((m) => (
            <LocationItem
              street={m.street}
              city={m.city}
              price={m.price}
              key={m.id}
            />
          ))}
          <View style={{ padding: 50 }} />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },
});

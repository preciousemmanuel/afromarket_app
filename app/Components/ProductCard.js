import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import Colors from "../Config/Colors";

export default function ProductCard({ img, price, title, handlePress }) {
  const sort = (text) => {
    text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <TouchableOpacity style={styles.pcard} onPress={handlePress}>
      <Image source={{ uri: img }} style={styles.img} />
      <View>
        <AppText
          text={title}
          style={{
            paddingVertical: 5,
            fontWeight: "500",
            fontSize: 18,
            fontFamily: "dm-medium",
            textAlign: "left",
            textTransform: "capitalize",
          }}
        />
        <AppText
          text={`₦ ${price}`}
          style={{ fontWeight: "700", fontFamily: "dm-medium" }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pcard: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "45%",
    height: 215,
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginBottom: 10,
  },
  img: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 125,
  },
  txt: {
    textAlign: "left",
  },
});

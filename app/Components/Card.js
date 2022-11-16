import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign, Feather } from "@expo/vector-icons";
import AppText, { MeidumText } from "./AppText";
import Colors from "../Config/Colors";

export default function Card({
  numReviews,
  title,
  address,
  img,
  style,
  imgStyle,
  rating,
}) {
  return (
    <View style={[styles.card, style]}>
      <View>
        <Image
          source={{ uri: img }}
          style={[styles.img, imgStyle]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.txtContainer}>
        <MeidumText
          text={title}
          style={{ fontSize: 24, textTransform: "capitalize" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 9,
          }}
        >
          <Feather name="map-pin" size={20} color={Colors.black} />
          <AppText text={address} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="staro" size={20} color={Colors.black} />
          {rating && <AppText text={` ${rating} `} />}
          {numReviews && <AppText text={`${numReviews}  Reviews`} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "column",
    height: 270,
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  txtContainer: {
    padding: 10,
  },
});

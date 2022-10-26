import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ImagePicker, { LargeImagePicker } from "../../Components/ImagePicker";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import Colors from "../../Config/Colors";
import Line from "../../Components/Line";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";

export default function ImageUpload({ handlePress, handleNextStep }) {
  return (
    <Screen>
      <ScrollView style={styles.main}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <MeidumText text="Create Product" style={{ fontSize: 30 }} />
          <AppText text="Cancel" style={{ color: Colors.primary }} />
        </View>
        <Line start={1} stop={0.5} style={{ width: "100%" }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <LargeImagePicker />
          <View style={{ flexDirection: "column", width: "45%" }}>
            <ImagePicker />
            <ImagePicker />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <ImagePicker />
            <ImagePicker />
          </View>
          <View style={{ width: "45%" }}>
            <LargeImagePicker />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "45%" }}>
            <ImagePicker />
          </View>
          <View style={{ width: "45%" }}>
            <ImagePicker />
          </View>
        </View>
        <View style={styles.footer}>
          <OutlineBtn
            title="Previous"
            color={Colors.primary}
            style={[styles.btn, { width: "45%" }]}
            handlePress={handleNextStep}
          />
          <AppBtn
            title="Next"
            color={Colors.primary}
            style={[styles.btn, { width: "45%" }]}
            handlePress={handleNextStep}
          />
        </View>
        <View style={{ padding: 20 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
});

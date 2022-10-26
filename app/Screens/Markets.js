import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import Card from "../Components/Card";
import Screen from "./Screen";
import Colors from "../Config/Colors";
import AppInput from "../Components/AppInput";
import AppText, { MeidumText } from "../Components/AppText";
import CheckBox from "../Components/CheckBox";
import { Feather } from "@expo/vector-icons";
import AppBtn, { OutlineBtn } from "../Components/AppBtn";
export default function Markets({ navigation }) {
  const [visible, setVisible] = useState(false);
  const datas = [
    {
      id: 1,
      img: require("../assets/afroimage3.jpg"),
    },
    {
      id: 2,
      img: require("../assets/afroimage2.png"),
    },
    {
      id: 3,
      img: require("../assets/afroimage5.png"),
    },
    {
      id: 4,
      img: require("../assets/afroimage1.png"),
    },
  ];

  return (
    <Screen>
      <View style={styles.market}>
        <View style={styles.search}>
          <AppInput
            iconName="ios-search-outline"
            style={{ backgroundColor: Colors.light }}
            placeholder="Search here"
          />
        </View>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={Colors.white}
              onPress={() => navigation.navigate("marketDetails")}
            >
              <Card img={item.img} />
            </TouchableHighlight>
          )}
        />
        <Modal visible={visible} transparent>
          <View style={styles.filter}>
            <View style={styles.top}>
              <Feather
                name="x-circle"
                size={20}
                onPress={() => setVisible((prevState) => !prevState)}
              />
              <AppText text="Filter" style={{ fontWeight: "700" }} />
              <AppText text="Clear All" />
            </View>

            <AppText text="Location" style={{ fontWeight: "700" }} />
            <AppInput
              style={{ backgroundColor: "#dadada" }}
              placeholder="Search here"
            />
            <AppText
              text="Filter by"
              style={{ marginTop: 20, fontWeight: "700" }}
            />
            <CheckBox text="All (24 merchants)" />
            <CheckBox text="Closest to me (10 merchants)" />
            <CheckBox text="Still open (33 merchants)" />
            <CheckBox text="Top Rated (10 merchants)" />

            <AppText
              text="Sort by"
              style={{ marginTop: 20, fontWeight: "700" }}
            />
            <CheckBox text="Newest to oldest" />
            <CheckBox text="Oldest to newest" />
            <CheckBox text="A-Z" />
            <View style={{ width: "100%" }}></View>
            <AppBtn
              title="Show All 12 Merchants"
              color={Colors.primary}
              style={{ marginTop: 20 }}
            />
          </View>
        </Modal>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.light,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  search: {
    paddingHorizontal: 10,
  },
  market: {
    paddingTop: 15,
    flex: 1,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  filter: {
    elevation: 30,
    position: "absolute",
    width: "100%",
    height: "80%",
    backgroundColor: Colors.white,
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

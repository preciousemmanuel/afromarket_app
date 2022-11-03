import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItemCompnent";
import Colors from "../Config/Colors";
import ListItmSep from "./ListItemSep";
import AppText from "./AppText";
import AppInput from "./AppInput";

const AppPicker = ({
  iconName,
  items = [],
  selectedItem,
  onSelectItem,
  placeholder,
  numberOfColumns,
  style,
}) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const queryItems = searchQuery
    ? items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]}>
          <AppText
            style={styles.Textstyle}
            text={selectedItem ? selectedItem : placeholder}
          />
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ModalVisible} animationType="slide" transparent>
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={styles.closeBtn}
            name="close"
            size={20}
            onPress={() => setModalVisible(false)}
          />
          <AppInput
            onChangeText={(text) => setSearchQuery(text)}
            placeholder="search"
            style={{
              width: "80%",
              height: 50,
              backgroundColor: Colors.light,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />

          <FlatList
            data={queryItems}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <ListItmSep />}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                label={item.label}
                handlePress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.medium,
    borderRadius: 5,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  icon: {
    marginHorizontal: 10,
  },
  closeBtn: {
    justifyContent: "center",
    color: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
  },
  Textstyle: {
    flex: 1,
    color: "#1b1b1b",
  },
  category: {
    elevation: 10,
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

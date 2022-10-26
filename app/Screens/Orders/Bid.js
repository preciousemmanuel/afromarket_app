import { StyleSheet, Modal, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import Screen from "../Screen";
import Colors from "../../Config/Colors";
import AppText, { MeidumText } from "../../Components/AppText";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { Items, ProductItems } from "../../Components/OpenItems";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
export default function Bid() {
  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  return (
    <Screen>
      <View style={styles.top}>
        <TouchableHighlight
          underlayColor={Colors.light}
          onPress={() => console.log("first")}
          style={{ padding: 15, borderRadius: 25 }}
        >
          <SimpleLineIcons name="arrow-left" color={Colors.black} size={20} />
        </TouchableHighlight>
        <View style={styles.flexRow}>
          <MeidumText text="View Bid" style={{ fontSize: 16 }} />
        </View>
        <View></View>
      </View>
      <View style={styles.main}>
        <View>
          <Items title="iPhone 11 Green 64GB" />
          <View style={styles.txtCont}>
            <MeidumText text="Selling Price" style={{ fontSize: 16 }} />
            <MeidumText
              text="400,000"
              style={{ fontSize: 19, color: Colors.black }}
            />
          </View>
          <View style={[styles.txtCont, { borderTopWidth: 0 }]}>
            <MeidumText text="Offer Price" style={{ fontSize: 16 }} />
            <MeidumText
              text="450,000"
              style={{ fontSize: 19, color: Colors.black }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 10,
            width: "100%",
          }}
        >
          <OutlineBtn
            handlePress={() => {
              setVisible(true);
            }}
            title="Accept Bid"
            iconColor={Colors.white}
            iconName="checkbox-marked-circle-outline"
            color={Colors.white}
            style={{ marginTop: 20, backgroundColor: Colors.primary }}
          />
          <OutlineBtn
            handlePress={() => {
              setVisibleTwo(true);
            }}
            title="Reject Bid"
            color={Colors.danger}
            style={{ borderColor: Colors.danger }}
            iconName="alpha-x-circle-outline"
            iconColor={Colors.danger}
          />
        </View>
      </View>
      <Modal visible={visible} transparent>
        <View style={styles.modal}>
          <View style={styles.top2}>
            <View />
            <AppText
              text="Accept Bid"
              style={{ fontWeight: "700", textAlign: "center" }}
            />
            <View />
          </View>
          <AppText
            text="Are you sure you want to accept this bid?"
            style={{ fontWeight: "600", textAlign: "center" }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: "100%",
            }}
          >
            <AppBtn
              handlePress={() => setVisible(false)}
              title="Accept Bid"
              color={Colors.primary}
              style={{ marginTop: 20 }}
            />
            <OutlineBtn
              handlePress={() => {
                setVisible(false);
              }}
              title="Go back"
              color={Colors.danger}
              style={{ borderColor: Colors.danger }}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleTwo} transparent>
        <View style={styles.modal}>
          <View style={styles.top2}>
            <View />
            <AppText
              text="Reject Bid"
              style={{ fontWeight: "700", textAlign: "center" }}
            />
            <View />
          </View>
          <AppText
            text="Are you sure you want to reject this bid?"
            style={{ fontWeight: "600", textAlign: "center" }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: "100%",
            }}
          >
            <AppBtn
              handlePress={() => setVisibleTwo(false)}
              title="Go Back"
              color={Colors.primary}
              style={{ marginTop: 20 }}
            />
            <OutlineBtn
              handlePress={() => {
                setVisibleTwo(false);
              }}
              title="Yes Reject Bid"
              color={Colors.danger}
              style={{ borderColor: Colors.danger }}
            />
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: Colors.light,
    width: "100%",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtCont: {
    borderTopColor: Colors.light,
    borderTopWidth: 1.6,
    marginTop: -10,
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  modal: {
    elevation: 40,
    width: "100%",
    height: "40%",
    backgroundColor: Colors.white,
    bottom: 0,
    position: "absolute",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

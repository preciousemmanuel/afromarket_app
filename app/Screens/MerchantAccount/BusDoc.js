import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Line from "../../Components/Line";
import Colors from "../../Config/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";

export default function BusDoc({ handleNextStep, handlePrevStep, data }) {
  const handleSubmit = (values) => {
    handleNextStep(values);
  };
  return (
    <Screen>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <>
            <ScrollView style={{ flex: 1, height: "100%" }}>
              <View style={styles.container}>
                <MeidumText text="Upload a business" />
                <MeidumText text="document" />
                <Line start={0} stop={0.8} style={{ width: "100%" }} />
                <AppText text="Business Document" />
                <TouchableOpacity>
                  <View style={styles.docInput}>
                    <Ionicons
                      name="document-text-outline"
                      size={28}
                      color={Colors.dark}
                    />
                    <AppText text="Upload CAC document" />
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <OutlineBtn
                handlePress={() => handlePrevStep(values)}
                title="Back"
                style={{ width: "50%" }}
                color={Colors.primary}
              />
              <AppBtn
                handlePress={handleNextStep}
                title="Next"
                color="green"
                style={{ width: "50%", marginLeft: 10 }}
              />
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

export const BusImage = ({ handleNextStep, handlePrevStep }) => {
  return (
    <Screen>
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <View style={styles.container}>
          <MeidumText text="Upload your brand" />
          <MeidumText text="Image" />
          <Line start={1} stop={1} style={{ width: "100%" }} />
          <AppText text="Business Document" />
          <TouchableOpacity>
            <View style={styles.imageInput}>
              <Ionicons name="image" size={28} color={Colors.dark} />
              <AppText text="Upload image" style={{ marginTop: 8 }} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <OutlineBtn
          handlePress={handlePrevStep}
          title="Back"
          style={{ width: "50%" }}
          color={Colors.primary}
        />
        <AppBtn
          handlePress={handleNextStep}
          title="Get Started"
          color="green"
          style={{ width: "50%", marginLeft: 10 }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    mtop: 500,
    width: "100%",
    padding: 20,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: -10,
    position: "relative",
  },
  docInput: {
    marginTop: 10,
    borderRadius: 8,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.medium,
    flexDirection: "row",
    alignItems: "center",
  },
  imageInput: {
    marginTop: 10,
    backgroundColor: Colors.medium,
    justifyContent: "center",
    alignItems: "center",
    width: 182,
    height: 150,
    // padding: 30,
    borderRadius: 8,
  },
});

import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppFormField from "../../Components/Forms/AppFormField";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Colors from "../../Config/Colors";
import Line from "../../Components/Line";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  Brand: Yup.string().required().min(1).label("Business Name"),
  Model: Yup.string().required().min(1).label("Model"),
  color: Yup.string().required().min(1).label("Color"),
  condition: Yup.number().required().min(10).label("Condition"),
  Sim: Yup.number().required().min(10).max(10).label("Sim"),
  displayType: Yup.string().required().min(1).label("Display Type"),
  internalStorage: Yup.string().required().min(1).label("Internal Storage"),
  resolution: Yup.string().required().min(1).label("Resolution"),
  mainCamera: Yup.string().required().min(1).label("Main Camera"),
  selfieCamera: Yup.string().required().min(1).label("Selfie Camera"),
  battery: Yup.string().required().min(1).label("Battery"),
});

export default function SpecificDetails({ handleNextStep }) {
  return (
    <Screen>
      <Formik
        initialValues={{
          Brand: "",
          Model: "",
          color: "",
          condition: "",
          Sim: "",
          displayType: "",
          internalStorage: "",
          resolution: "",
          mainCamera: "",
          selfieCamera: "",
          battery: "",
        }}
        onSubmit={() => console.log("first")}
        validationSchema={validationSchema}
      >
        <>
          <ScrollView style={{ flex: 1, height: "100%" }}>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <MeidumText text="Create Product" style={{ fontSize: 30 }} />
                <AppText text="Cancel" style={{ color: Colors.primary }} />
              </View>
              <Line start={0.7} stop={0.7} style={{ width: "90%" }} />
              <AppText text="Specific Details" />
              <View style={styles.form}>
                <AppFormField name="Brand" placeholder="Brand" />
                <AppFormField name="Model" placeholder="Model" />
                <AppFormField name="color" placeholder="Color" />
                <AppFormField name="condition" placeholder="Condition" />
                <AppFormField name="Sim" placeholder="Sim" />
                <AppFormField name="displayType" placeholder="Display Type" />
                <AppFormField name="resolution" placeholder="Resolution" />

                <AppFormField name="mainCamera" placeholder="Main Camera" />
                <AppFormField name="selfieCamera" placeholder="Selfie Camera" />
                <AppFormField
                  name="internalStorage"
                  placeholder="internalStorage"
                />
                <AppFormField name="battery" placeholder="Battery" />
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
          </ScrollView>
        </>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    mtop: 500,
    width: "100%",
    padding: 20,
    flex: 1,
  },
  form: {
    paddingTop: 10,
  },
  btn: {
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
});

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Line from "../../Components/Line";
import Colors from "../../Config/Colors";
import { Formik } from "formik";
import SubmitButton from "../../Components/Submit";
import ImageInput from "../../Components/ImageInput";
import DocumentInput from "../../Components/DocumentInput";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  cac_document: Yup.object().required().nullable().label("Business Document"),
});

export default function BusDoc({ handleNextStep, handlePrevStep, data }) {
  const handleSubmit = (values) => {
    handleNextStep(values);
  };
  return (
    <Screen>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <>
            <ScrollView style={{ flex: 1, height: "100%" }}>
              <View style={styles.container}>
                <MeidumText text="Upload a business" />
                <MeidumText text="document" />
                <Line start={0.7} stop={0.7} style={{ width: "100%" }} />
                <AppText text="Business Document" />

                <TouchableOpacity>
                  <DocumentInput name="cac_document" />
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
              <SubmitButton
                title="Next"
                color={Colors.primary}
                style={{ width: "50%", marginLeft: 10 }}
              />
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}
const validationSchemaTwo = Yup.object().shape({
  brand_Image: Yup.string().required().label("Brand Image"),
});
export const BusImage = ({ handleNextStep, handlePrevStep, data }) => {
  const handleSubmit = (values) => {
    handleNextStep(values);
  };
  return (
    <Screen>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaTwo}
      >
        {({ values }) => (
          <>
            <ScrollView style={{ flex: 1, height: "100%" }}>
              <View style={styles.container}>
                <MeidumText text="Upload your brand" />
                <MeidumText text="Image" />
                <Line start={1} stop={1} style={{ width: "100%" }} />
                <AppText
                  text="Business Document"
                  style={{ marginBottom: 20 }}
                />
                <TouchableOpacity>
                  <ImageInput name="brand_Image" />
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
              <SubmitButton
                title="Get Started"
                color={Colors.primary}
                style={{ width: "50%", marginLeft: 10 }}
              />
            </View>
          </>
        )}
      </Formik>
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
    padding: 20,
    bottom: 20,
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

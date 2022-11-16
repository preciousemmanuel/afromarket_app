import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppFormField from "../../Components/Forms/AppFormField";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Colors from "../../Config/Colors";
import Line from "../../Components/Line";
import { Formik } from "formik";
import * as Yup from "yup";
import SubmitButton from "../../Components/Submit";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Product Name"),
  productDetails: Yup.string().required().min(1).label("Product Details"),
  description: Yup.string().required().min(1).label("Product Description"),
  price: Yup.number()
    .transform((o, v) => parseInt(v.replace(/,/g, "")))
    .required()
    .min(300)
    .label("Price"),
  Tags: Yup.number().required().min(10).max(10).label("Tags"),
});

export default function CreateProduct({
  handleNextStep,
  handlePrevStep,
  navigation,
}) {
  return (
    <Screen>
      <Formik
        initialValues={{
          name: "",
          productDetails: "",
          description: "",
          price: "",
          Tags: "",
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AppText text="Cancel" style={{ color: Colors.primary }} />
                </TouchableOpacity>
              </View>
              <Line start={0.4} stop={0.4} style={{ width: "90%" }} />
              <AppText text="Product Details" />
              <View style={styles.form}>
                <AppFormField name="name" placeholder="Product Name" />
                <AppFormField
                  name="productDetails"
                  placeholder="Product Details"
                />
                <AppFormField
                  name="description"
                  placeholder="Product Description"
                  numberOfLines={6}
                />
                <AppFormField
                  name="price"
                  placeholder="Price"
                  keyboardType="numeric"
                />
                <AppFormField name="Tags" placeholder="Tags" />
              </View>
            </View>
            <View style={styles.footer}>
              <SubmitButton
                title="Next"
                color={Colors.primary}
                style={styles.btn}
              />
            </View>
          </ScrollView>
        </>
      </Formik>
    </Screen>
  );
}

// export function  (params) {

// }

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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
});

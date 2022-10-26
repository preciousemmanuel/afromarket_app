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
  productName: Yup.string().required().min(1).label("Product Name"),
  productDetails: Yup.string().required().min(1).label("Product Details"),
  productDescription: Yup.string().required().min(1).label("Color"),
  price: Yup.number().required().min(10).label("Price"),
  Tags: Yup.number().required().min(10).max(10).label("Tags"),
});

export default function CreateProduct({ handleNextStep, handlePrevStep }) {
  return (
    <Screen>
      <Formik
        initialValues={{
          productName: "",
          productDetails: "",
          productDescription: "",
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
                <AppText text="Cancel" style={{ color: Colors.primary }} />
              </View>
              <Line start={0.4} stop={0.4} style={{ width: "90%" }} />
              <AppText text="Product Details" />
              <View style={styles.form}>
                <AppFormField name="productName" placeholder="Product Name" />
                <AppFormField
                  name="productDetails"
                  placeholder="Product Details"
                />
                <AppFormField
                  name="productDescription"
                  placeholder="Product Description"
                  numberOfLines={6}
                />
                <AppFormField name="price" placeholder="Condition" />
                <AppFormField name="Tags" placeholder="Tags" />
              </View>
            </View>
            <View style={styles.footer}>
              <AppBtn
                title="Next"
                color={Colors.primary}
                style={[styles.btn]}
                handlePress={handleNextStep}
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

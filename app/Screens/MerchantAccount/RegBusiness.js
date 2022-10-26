import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppInput from "../../Components/AppInput";
import AppBtn from "../../Components/AppBtn";
import Line from "../../Components/Line";
import BusDoc, { BusImage } from "./BusDoc";
// import AppFormField from "../../Components/Forms/AppFormField";

import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../Components/Forms/AppFormField";
import Colors from "../../Config/Colors";
import SubmitButton from "../../Components/Submit";

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required().min(1).label("Business Name"),
  businessType: Yup.string().required().min(1).label("Type"),
  businessDescription: Yup.string().required().min(1).label("Description"),
  bvn: Yup.number().required().min(10).label("BVN"),
  tin: Yup.number().required().min(10).label("TIN"),
  country: Yup.string().required().min(1).label("Country"),
  state: Yup.string().required().min(1).label("State"),
  street: Yup.string().required().min(1).label("Street"),
  city: Yup.string().required().min(1).label("city"),
});
export function BusinessData({ handleNextStep, data }) {
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
        <ScrollView style={{ flex: 1, height: "100%" }}>
          <View style={styles.container}>
            <MeidumText text="Give us info about" />
            <MeidumText text="your business" />
            <Line start={0.5} stop={0.5} style={{ width: "90%" }} />
            <AppText text="Business Details" />
            <View style={styles.form}>
              <AppFormField name="businessName" placeholder="Business Name" />
              <AppFormField name="businessType" placeholder="Business Type" />
              <AppFormField
                name="businessDescription"
                placeholder="Business Description"
                multiline={true}
                numberOfLines={8}
                style={{ height: 90 }}
              />
              <AppFormField
                name="bvn"
                placeholder="BVN"
                keyboardType="numeric"
              />
              <AppFormField
                name="tin"
                placeholder="TIN"
                keyboardType="number-pad"
              />
              <AppText text="Business Address" />
              <AppFormField name="country" placeholder="Country" />
              <AppFormField name="street" placeholder="Street Address" />

              <AppFormField name="city" placeholder="City" />
              <AppFormField name="state" placeholder="State" />

              <View style={{ padding: 10 }} />
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
      </Formik>
    </Screen>
  );
}

export default function RegBusiness() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    businessName: "",
    businessType: "",
    businessDescription: "",
    bvn: "",
    tin: "",
    country: "",
    state: "",
    city: "",
  });
  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };
  const handleNext = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  // const handleNext = (values) => {
  //   setData((prevState) => ({ ...values, ...prevState }));
  //   if (currentStep < steps.length - 1)
  //     setCurrentStep((prevState) => prevState + 1);
  // };
  // const handlePrev = (values) => {
  //   console.log(values, "from");
  //   setData((prevState) => ({ ...values, ...prevState }));
  //   setCurrentStep((prevState) => prevState - 1);
  // };
  const steps = [
    <BusinessData handleNextStep={handleNext} data={data} />,
    <BusDoc
      handleNextStep={handleNext}
      handlePrevStep={handlePrev}
      data={data}
    />,
    <BusImage
      handleNextStep={handleNext}
      handlePrevStep={handlePrev}
      data={data}
    />,
  ];
  return <Screen>{steps[currentStep]}</Screen>;
}

const styles = StyleSheet.create({
  // name: {
  //   flex: 1,
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
    bottom: -10,
    position: "relative",
  },
});

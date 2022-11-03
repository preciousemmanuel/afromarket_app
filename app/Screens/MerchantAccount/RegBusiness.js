import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import Line from "../../Components/Line";
import BusDoc, { BusImage } from "./BusDoc";

import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../Components/Forms/AppFormField";
import Colors from "../../Config/Colors";
import SubmitButton from "../../Components/Submit";
import AppFormPicker from "../../Components/AppFormPicker";
import Onboarding from "./Onboarding";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required().min(1).label("Business Name"),
  businessType: Yup.string().required().min(1).label("Type"),
  businessDescription: Yup.string()
    .required()
    .min(10)
    .label("Business Description"),
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
  const items = [
    {
      id: 1,
      label: "LAgoos",
    },
    {
      id: 2,
      label: "INDIA",
    },
    {
      id: 3,
      label: "UK",
    },
    {
      id: 4,
      label: "Nigeria",
    },
    {
      id: 5,
      label: "USA",
    },
    {
      id: 6,
      label: "LAgoos",
    },
    {
      id: 7,
      label: "INDIA",
    },
    {
      id: 8,
      label: "UK",
    },
    {
      id: 9,
      label: "Nigeria",
    },
    {
      id: 10,
      label: "USA",
    },
  ];
  const business = [
    {
      id: 1,
      label: "Trader",
    },
    {
      id: 2,
      label: "Gadget",
    },
    {
      id: 3,
      label: "Car dealer",
    },
    {
      id: 4,
      label: "Airtime Distributor",
    },
  ];
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
              <AppFormPicker
                items={business}
                style={{ height: 55 }}
                name="businessType"
                placeholder="Business Type"
              />
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
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <AppFormPicker
                  name="city"
                  items={items}
                  placeholder="City"
                  style={{ height: 55 }}
                />
                <AppFormPicker
                  name="state"
                  items={items}
                  placeholder="State"
                  style={{ height: 55 }}
                />
              </View>
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
  const navigation = useNavigation();
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
    busdoc: null,
    busImg: "",
  });
  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
    navigation.navigate("appNav");
  };
  const handleNext = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (currentStep >= steps.length - 1) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };
  const handleNextS = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <Onboarding handleNextStep={handleNextS} />,
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
  return <>{steps[currentStep]}</>;
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: -10,
    position: "relative",
  },
});

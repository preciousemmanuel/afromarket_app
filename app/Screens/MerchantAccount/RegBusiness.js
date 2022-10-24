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

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required().min(1).label("Business Name"),
  businessType: Yup.string().required().min(1).label("Type"),
  businessDescription: Yup.string().required().min(1).label("Description"),
  bvn: Yup.number().required().min(10).label("BVN"),
  tin: Yup.number().required().min(10).max(10).label("TIN"),
  country: Yup.string().required().min(1).label("Country"),
  state: Yup.string().required().min(1).label("State"),
  street: Yup.string().required().min(1).label("Street"),
  city: Yup.string().required().min(1).label("city"),
});
export function BusinessData({ handleNextStep }) {
  return (
    <Screen>
      <Formik
        initialValues={{
          businessName: "",
          businessType: "",
          businessDescription: "",
          bvn: "",
          tin: "",
          country: "",
          state: "",
          city: "",
        }}
        onSubmit={() => console.log("first")}
        validationSchema={validationSchema}
      >
        <>
          <ScrollView style={{ flex: 1, height: "100%" }}>
            <View style={styles.container}>
              <MeidumText text="Give us info about" />
              <MeidumText text="your business" />
              <Line start={0} stop={0.5} style={{ width: "90%" }} />
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
                <View style={{ width: "100%" }}>
                  <AppFormField
                    name="city"
                    placeholder="City"
                    style={{ width: "50%" }}
                  />
                  <AppFormField
                    name="state"
                    placeholder="State"
                    style={{ width: "50%", marginLeft: 6 }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <AppBtn
                title="Next"
                color="green"
                style={styles.btn}
                handlePress={handleNextStep}
              />
            </View>
          </ScrollView>
        </>
      </Formik>
    </Screen>
  );
}

export default function RegBusiness() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep < steps.length - 1)
      setCurrentStep((prevState) => prevState + 1);
    console.log(currentStep, "current step");
  };
  const handlePrev = () => {
    setCurrentStep((prevState) => prevState - 1);
  };
  const steps = [
    <BusinessData handleNextStep={handleNext} />,
    <BusDoc handleNextStep={handleNext} handlePrevStep={handlePrev} />,
    <BusImage handleNextStep={handleNext} handlePrevStep={handlePrev} />,
  ];

  return <Screen>{steps[currentStep]}</Screen>;
}

const styles = StyleSheet.create({
  forgot: {
    right: -200,
  },
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

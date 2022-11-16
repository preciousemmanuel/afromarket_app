import axios from "axios";

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

import { MaterialCommunityIcons } from "@expo/vector-icons";
const validationSchema = Yup.object().shape({
  business_name: Yup.string().required().min(1).label("Business Name"),
  business_type: Yup.string().required().min(1).label("Type"),
  business_description: Yup.string()
    .required()
    .min(10)
    .label("Business Description"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
  phone_number: Yup.number().required().min(11).label("Phone Number"),
  bank_verification_number: Yup.number().required().min(10).label("BVN"),
  tax_id_number: Yup.number().required().min(10).label("TIN"),
  country: Yup.string().required().min(1).label("Country"),
  state: Yup.string().required().min(1).label("State"),
  street: Yup.string().required().min(1).label("Street"),
  city: Yup.string().required().min(1).label("city"),
});
export function BusinessData({ handleNextStep, data }) {
  const [visible, setVisible] = useState(false);
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
        <>
          <ScrollView style={{ flex: 1, height: "100%" }}>
            <View style={styles.container}>
              <MeidumText text="Give us info about" />
              <MeidumText text="your business" />
              <Line start={0.5} stop={0.5} style={{ width: "90%" }} />
              <AppText text="Business Details" />
              <View style={styles.form}>
                <AppFormField
                  name="business_name"
                  placeholder="Business Name"
                />
                <AppFormField
                  name="email"
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <View>
                  <MaterialCommunityIcons
                    name={!visible ? "eye" : "eye-off"}
                    color={Colors.dark_light}
                    size={30}
                    style={styles.passEye}
                    onPress={() => setVisible((prevState) => !prevState)}
                  />
                  <AppFormField
                    multiline={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder="Password"
                    secureTextEntry={!visible}
                    name="password"
                  />
                </View>
                <AppFormField
                  name="phone_number"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <AppFormField
                  name="business_description"
                  placeholder="Business Description"
                  multiline={true}
                  numberOfLines={8}
                  style={{ height: 90 }}
                />
                <AppFormField
                  name="bank_verification_number"
                  placeholder="BVN"
                  keyboardType="numeric"
                />
                <AppFormPicker
                  items={business}
                  style={{ height: 55 }}
                  name="business_type"
                  placeholder="Business Type"
                />
                <AppFormField
                  name="tax_id_number"
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
        </>
      </Formik>
    </Screen>
  );
}

export default function RegBusiness() {
  const apiEndpoint = "https://afromarket-be-ekn6j.ondigitalocean.app";
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    business_name: "",
    business_description: "",
    bank_verification_number: "",
    email: "",
    password: "",
    business_type: "",
    tax_id_number: "",
    country: "",
    state: "",
    city: "",
    cac_document: null,
    phone_number: "",
    brand_Image: "",
  });
  const makeRequest = (formData) => {
    console.log(formData);
    const address =
      formData.street +
      " " +
      formData.city +
      " " +
      formData.state +
      " " +
      " " +
      formData.country;
    const cac_docucment = formData.cac_document.uri;
    delete formData.cac_document;
    delete formData.street;
    delete formData.city;
    delete formData.state;
    delete formData.country;
    const regForm = { ...formData, address, cac_docucment };
    console.log(regForm, "reg form");
    try {
      const data = axios.post(
        `${apiEndpoint}/afro-market/v1/merchant/signup`,
        regForm
      );
      console.log(data);
    } catch (error) {
      console.log(error, "error made/committed");
    }
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
  passEye: {
    position: "absolute",
    right: 10,
    zIndex: 10,
    top: 25,
  },
});

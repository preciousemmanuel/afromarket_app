import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppInput from "../../Components/AppInput";
import AppBtn from "../../Components/AppBtn";
import Colors from "../../Config/Colors";
import ImageInput from "../../Components/ImageInput";
import { Formik } from "formik";
import AppFormField from "../../Components/Forms/AppFormField";
import * as Yup from "yup";
import SubmitButton from "../../Components/Submit";
const { width, height } = Dimensions.get("window");
const ValidationSchema = Yup.object({
  img: Yup.string().required().label("Image"),
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  country: Yup.string().required().label("Country"),
  state: Yup.string().required().label("State"),
  phone: Yup.string().required().label("Phone"),
});
export default function Details({ handleNext, data }) {
  const handleSubmit = (values) => {
    handleNext(values);
  };

  return (
    <Screen>
      <Formik
        initialValues={data}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <ScrollView style={{ flex: 1, height: "100%" }}>
          <View style={styles.container}>
            <MeidumText text="Welcome" />
            <AppText text="Let's get you started" />
            <View style={styles.form}>
              <ImageInput name="img" style={{ width: "50%" }} />
              <View style={styles.name}>
                <AppFormField
                  name="first_name"
                  placeholder="First Name"
                  style={{ width: width * 0.4 }}
                />
                <AppFormField
                  name="last_name"
                  placeholder="Last Name"
                  style={{ width: width * 0.4, marginLeft: 6 }}
                />
              </View>
              <AppFormField name="country" placeholder="Country" />
              <AppFormField name="state" placeholder="State" />
              <AppFormField name="phone" placeholder="Phone Number" />
            </View>
          </View>
          <View style={styles.footer}>
            <SubmitButton
              title="Continue"
              color={Colors.primary}
              style={styles.btn}
            />
            <AppText
              text="Already have an account?"
              style={{ fontSize: 18, marginBottom: 6 }}
            />
            <TouchableOpacity>
              <AppText
                text="Login"
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  fontWeight: "700",
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  name: {
    flex: 1,
    width: width,
    flexDirection: "row",
  },
  container: {
    mtop: 500,
    width: "100%",
    padding: 20,
    flex: 1,
  },
  form: {
    // paddingTop: 60,
    padding: 10,
  },
  btn: {
    marginBottom: 30,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: 10,
    position: "relative",
  },
});

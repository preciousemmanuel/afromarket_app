import { useState } from "react";
// import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppFormField from "../../Components/Forms/AppFormField";
import AppBtn from "../../Components/AppBtn";
import SubmitButton from "../../Components/Submit";
import Screen from "../Screen";

export default function FormTest() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} errors={errors} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);
  return <Screen>{steps[currentStep]}</Screen>;
}

const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      enableReinitialize={false}
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <>
          <AppFormField name="first_name" />

          <AppFormField name="last_name" />

          <SubmitButton title="Next" />
        </>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      enableReinitialize={false}
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <>
          <AppFormField name="email" />
          <AppFormField name="password" />

          <AppBtn handlePress={() => props.prev(values)} title="Back" />
          <SubmitButton title="Next" />
        </>
      )}
    </Formik>
  );
};

import { View } from "react-native";
import React from "react";
import AppInput from "../AppInput";
import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";
export default function AppFormField({ name, style, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <View>
      <AppInput
        style={style}
        onChangeText={handleChange(name)}
        handleBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}

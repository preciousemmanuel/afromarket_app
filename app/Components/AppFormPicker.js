import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "./PickerSelect";
export default function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfColumns,
  style,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <View style={{ flexDirection: "column" }}>
      <AppPicker
        style={style}
        numberOfColumns={numberOfColumns}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item.label)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      {errors[name] && (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

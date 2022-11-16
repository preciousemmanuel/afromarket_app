import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import Colors from "../Config/Colors";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
export default function DocumentInput({ name }) {
  const {
    initialValues,
    errors,
    touched,
    setFieldValue,
    values,
    setFieldTouched,
  } = useFormikContext();
  const [doctName, setDocName] = useState(initialValues[name]);
  const pickDocument = async () => {
    setFieldTouched([name]);
    let result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf"],
    });
    if (result.type === "success") {
      setFieldValue(name, result);
      setDocName(result);
    }
  };
  return (
    <>
      {!doctName && (
        <TouchableOpacity onPress={pickDocument}>
          <View style={styles.docInput}>
            <Ionicons
              name="document-text-outline"
              size={28}
              color={Colors.dark}
            />
            <AppText text="Upload CAC document" />
          </View>
          <ErrorMessage error={errors[name]} visible={touched[name]} />
        </TouchableOpacity>
      )}
      {doctName && (
        <TouchableOpacity onPress={pickDocument}>
          <View style={styles.docInput}>
            <Ionicons
              name="document-text-outline"
              size={28}
              color={Colors.dark}
            />
            <View>
              <AppText text={doctName.name} />
              <AppText text="Tap to Change" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  docInput: {
    borderRadius: 8,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.medium,
    flexDirection: "row",
    alignItems: "center",
  },
});

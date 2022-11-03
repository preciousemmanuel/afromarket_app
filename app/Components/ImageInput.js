import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Colors from "../Config/Colors";
import AppText from "./AppText";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function ImageInput({ name, style }) {
  const { initialValues, errors, touched, setFieldValue, values } =
    useFormikContext();
  const [imageUri, setImageUri] = useState(initialValues[name]);
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Change Image",
        "Are you sure you want to remove this image?",
        [{ text: "Yes", onPress: () => selectImage() }, { text: "No" }]
      );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setImageUri(result.uri);
        setFieldValue(name, result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.container, style]}>
          {!imageUri && (
            <View style={styles.imageInput}>
              <Ionicons name="image" size={28} color={Colors.dark} />
              <AppText text="Upload image" style={{ marginTop: 8 }} />
            </View>
          )}
          {imageUri && (
            <>
              <Image
                source={{ uri: values[name] }}
                resizeMode="cover"
                style={styles.image}
              />
              <AppText text="Tap to Change" />
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.medium,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  image: {
    borderRadius: 10,
    height: 140,
    width: 140,
  },
  imageInput: {
    backgroundColor: Colors.medium,
    justifyContent: "center",
    alignItems: "center",
    width: 182,
    height: 150,
    borderRadius: 8,
  },
});

export default ImageInput;

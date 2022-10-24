import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../Screen";
import AppText, { MeidumText } from "../../Components/AppText";
import AppInput from "../../Components/AppInput";
import AppBtn, { OutlineBtn } from "../../Components/AppBtn";
import Colors from "../../Config/Colors";

export default function Login() {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <MeidumText text="Welcome Back" />
          <AppText text="Let's pick up where you left off" />

          <View style={styles.form}>
            <AppInput placeholder="Email Address" />
            <AppInput placeholder="Password" />
            <TouchableOpacity style={styles.forgot}>
              <Text
                style={{
                  fontWeight: "500",
                  fontFamily: "lato-bold",
                  fontSize: 15,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <AppBtn title="Login" color="green" style={styles.btn} />
            <OutlineBtn title="Continue with Google" icon />
          </View>
        </View>
        <View style={styles.footer}>
          <AppText
            text="Are you new here?"
            style={{ fontSize: 18, marginBottom: 5 }}
          />
          <TouchableOpacity>
            <AppText
              text="Create an account"
              style={{ fontSize: 18, color: Colors.primary, fontWeight: "700" }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  forgot: {
    right: -200,
  },
  container: {
    mtop: 500,
    width: "100%",
    padding: 20,
    flex: 1,
  },
  form: {
    paddingTop: 60,
  },
  btn: {
    marginBottom: 30,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: -150,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

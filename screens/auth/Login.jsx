/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {
  VStack,
  StatusBar,
  Text,
  Heading,
  Spacer,
  Button,
  HStack,
  Pressable,
  Input,
} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackBtn from '../../components/BackBtn';

const Login = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <VStack flex="1" space="10">
          <HStack>
            <BackBtn />
          </HStack>
          <Formik>
            {() => {
              return (
                <VStack flex="1" space="4" pb="4">
                  <VStack mb="5">
                    <Heading size="xl">Welcome Back</Heading>
                    <Text>Let’s pick up where you left off</Text>
                  </VStack>
                  <Input placeholder="Email Address" fontWeight="medium" />
                  <Input placeholder="Password" />
                  <Pressable onPress={() => navigate('ForgotPassword')}>
                    <Text fontWeight="medium" textAlign="right">
                      Forgot Password?
                    </Text>
                  </Pressable>
                  <Spacer />
                  <Button onPress={() => navigate('CreateAccount2')}>
                    Continue
                  </Button>
                  <VStack space="2" pt="2">
                    <Text textAlign="center">Are you new here?</Text>
                    <Pressable onPress={() => navigate('CreateAccount')}>
                      <Text fontWeight="medium" color="main" textAlign="center">
                        Create an account
                      </Text>
                    </Pressable>
                  </VStack>
                </VStack>
              );
            }}
          </Formik>
        </VStack>
      </SafeAreaView>
    </>
  );
};

export default Login;

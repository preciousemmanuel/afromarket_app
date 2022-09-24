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

const CreateAccount = () => {
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
                    <Heading size="xl">Welcome</Heading>
                    <Text>Let’s get you started</Text>
                  </VStack>
                  <Input placeholder="Email Address" fontWeight="medium" />
                  <Input placeholder="Create Password" />
                  <Input placeholder="Confirm Password" />
                  <Spacer />
                  <Button onPress={() => navigate('CreateAccount2')}>
                    Continue
                  </Button>
                  <VStack space="2" pt="2">
                    <Text textAlign="center">Already a part of us?</Text>
                    <Pressable onPress={() => navigate('Login')}>
                      <Text fontWeight="medium" color="main" textAlign="center">
                        Login
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

export default CreateAccount;

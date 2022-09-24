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
  Select,
  View,
} from 'native-base';
import {Check, Image} from 'phosphor-react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackBtn from '../../components/BackBtn';

const CreateAccount2 = () => {
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
                  <VStack>
                    <Heading size="xl">Welcome</Heading>
                    <Text>Let’s get you started</Text>
                  </VStack>
                  <HStack>
                    <Pressable>
                      <View
                        rounded="md"
                        bg="gray.200"
                        w="24"
                        style={{
                          aspectRatio: 1,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image weight="duotone" size={32} />
                      </View>
                    </Pressable>
                  </HStack>
                  <HStack space="4">
                    <Input
                      flex="1"
                      placeholder="Firstname"
                      fontWeight="medium"
                    />
                    <Input
                      flex="1"
                      placeholder="Lastname"
                      fontWeight="medium"
                    />
                  </HStack>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Country"
                    padding="6"
                    _selectedItem={{
                      endIcon: <Check />,
                    }}
                    mt={1}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose State"
                    padding="6"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <Check />,
                    }}
                    mt={1}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                  <Input placeholder="Phone Number" keyboardType="phone-pad" />
                  <Spacer />
                  <Button onPress={() => navigate('GoodToGo')}>Continue</Button>
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

export default CreateAccount2;

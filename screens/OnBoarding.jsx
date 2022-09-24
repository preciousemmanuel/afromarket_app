import {
  ScrollView,
  VStack,
  Text,
  Heading,
  Button,
  HStack,
  View,
  Image,
  Spacer,
} from 'native-base';
import React, {useRef} from 'react';
import {StatusBar, StyleSheet, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  const scrollRef = useRef();
  const {navigate} = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        ref={scrollRef}
        horizontal
        bounces={false}
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        <VStack flex={1} w={width} justifyContent="flex-end">
          <Image
            source={require('../assets/images/backdrop1.png')}
            alt="backdrop"
            resizeMode="cover"
            style={[StyleSheet.absoluteFillObject]}
          />
          <LinearGradient
            colors={['transparent', 'white']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.5}}
            style={[StyleSheet.absoluteFillObject]}
          />
          <VStack bg="white" h="1/2" pb={bottom + 20} px="5" pt="10" space="2">
            <Heading size="xl">Buy from the best</Heading>
            <Text maxW="3/4">
              Buy products at the best price you can ever get
            </Text>
            <HStack bg="gray.200" mb="20" my="2" maxW="3/4" rounded="full">
              <View h="1" bg="main" flex={1} />
              <View h="1" bg="gray.200" flex={1} />
            </HStack>
            <Spacer />
            <Button
              onPress={() => {
                scrollRef.current.scrollTo({x: width, y: 0, animated: true});
              }}>
              Next
            </Button>
          </VStack>
        </VStack>
        <VStack flex={1} w={width} justifyContent="flex-end">
          <Image
            source={require('../assets/images/backdrop2.png')}
            alt="backdrop"
            resizeMode="cover"
            style={[StyleSheet.absoluteFillObject]}
          />
          <LinearGradient
            colors={['transparent', 'white']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.5}}
            style={[StyleSheet.absoluteFillObject]}
          />
          <VStack bg="white" h="1/2" pb={bottom + 20} px="5" pt="10" space="2">
            <Heading size="xl">Become a merchant</Heading>
            <Text maxW="3/4">
              Start selling and making money on our platform
            </Text>
            <HStack bg="gray.200" mb="20" my="2" maxW="3/4" rounded="full">
              <View h="1" bg="main" flex={1} />
              <View h="1" bg="main" flex={1} />
            </HStack>
            <Spacer />
            <Button
              onPress={() => {
                navigate('CreateAccount');
              }}>
              Get Started
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default OnBoarding;

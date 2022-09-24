import {Button, Heading, Image, Spacer, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const GoodToGo = () => {
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  return (
    <VStack flex={1} w={width} justifyContent="flex-end">
      <Image
        source={require('../../assets/images/backdrop3.png')}
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
        <Heading size="xl">You’re good to go</Heading>
        <Text maxW="3/4">Now you can use our platfrom to it’s fullest</Text>
        <Spacer />
        <Button>Let's Go</Button>
      </VStack>
    </VStack>
  );
};

export default GoodToGo;

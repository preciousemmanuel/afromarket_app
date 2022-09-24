import {Pressable} from 'native-base';
import React from 'react';
import {CaretLeft} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

const BackBtn = () => {
  const {goBack} = useNavigation();
  return (
    <Pressable rounded="full" p="2" bg="gray.200" onPress={goBack}>
      <CaretLeft />
    </Pressable>
  );
};

export default BackBtn;

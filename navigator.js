import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';

const StackNavigator = createNativeStackNavigator();

const Navigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Home" component={Home} />
    </StackNavigator.Navigator>
  );
};

export default Navigator;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccount from './screens/auth/CreateAccount';
import CreateAccount2 from './screens/auth/CreateAccount2';
import GoodToGo from './screens/auth/GoodToGo';
import Login from './screens/auth/Login';
import Home from './screens/Home';
import OnBoarding from './screens/OnBoarding';

const StackNavigator = createNativeStackNavigator();

const Navigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="OnBoarding" component={OnBoarding} />
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="GoodToGo" component={GoodToGo} />
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="CreateAccount" component={CreateAccount} />
      <StackNavigator.Screen name="CreateAccount2" component={CreateAccount2} />
    </StackNavigator.Navigator>
  );
};

export default Navigator;

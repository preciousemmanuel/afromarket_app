/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './navigator';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

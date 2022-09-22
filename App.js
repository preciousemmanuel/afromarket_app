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
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <NativeBaseProvider>
          <Navigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MBottomTabsNavigator } from './src/navigator/MBottomTabsNavigator';
import { NativeBaseProvider } from 'native-base'
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

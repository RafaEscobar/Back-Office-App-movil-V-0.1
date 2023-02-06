import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MBottomTabsNavigator } from './src/navigator/MBottomTabsNavigator';
import { NativeBaseProvider } from 'native-base'

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MBottomTabsNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

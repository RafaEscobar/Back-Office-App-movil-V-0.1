import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MBottomTabsNavigator } from './src/navigator/MBottomTabsNavigator';
import { NativeBaseProvider } from 'native-base'
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MBottomTabsUserNavigator } from './src/navigator/MBottomTabsUserNavigator'
import { StackAuth } from './src/navigator/StackAuth';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* PRINCIPAL */}
        {/* <MBottomTabsNavigator /> */}

        {/* PARA USUARIO */}
        {/* <MBottomTabsUserNavigator /> */}

        {/* CON LOGIN */}
        <StackAuth />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

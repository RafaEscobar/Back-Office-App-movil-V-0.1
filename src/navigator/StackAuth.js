import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '../screens/LoginScreen';
import { MBottomTabsNavigator } from '../navigator/MBottomTabsNavigator'

export const StackAuth = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='MBottomTabsNavigator' component={MBottomTabsNavigator} />
    </Stack.Navigator>
  )
}

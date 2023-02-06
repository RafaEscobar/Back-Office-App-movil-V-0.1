import React from 'react'

// Pages, Screens o Navigators
import { AddExtraHrsScreen } from '../screens/AddExtraHrsScreen';
import { MTTabsExtraHrsNavigator } from './MTTabsExtraHrsNavigator';

// creates Naviagators
import { createStackNavigator } from '@react-navigation/stack'

// Constantes para creates Navigators
const Stack = createStackNavigator();

export const StackExtraHrsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MTTabsExtraHrsNavigator' options={{ headerShown: false }} component={MTTabsExtraHrsNavigator} />
        <Stack.Screen name='AddExtraHrsScreen' options={{ title:'Agregar horas extra' }} component={AddExtraHrsScreen} />
    </Stack.Navigator>
  )
}

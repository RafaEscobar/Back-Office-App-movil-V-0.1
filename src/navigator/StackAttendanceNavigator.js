import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator();

// Screens, Pages o Navigations
import { MTTabsAttendanceNavigator } from './MTTabsAttendanceNavigator';
import { AbsenceDetailsScreen } from '../screens/AbsenceDetailsScreen';
export const StackAttendanceNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Stack.Screen name='MTTabsAttendanceNavigator' options={{ headerShown: false }} component={MTTabsAttendanceNavigator} />
        <Stack.Screen name='AbsenceDetailsScreen' options={{ title:'Inasistencia' }}  component={AbsenceDetailsScreen} />
    </Stack.Navigator>
  )
}

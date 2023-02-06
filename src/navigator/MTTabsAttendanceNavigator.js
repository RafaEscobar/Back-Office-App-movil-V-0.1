import React from 'react'
// Navegacion
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// Screens o Pages 
import { RegistrationPage } from '../pages/attendances/RegistrationPage';
import { AttendancePage } from '../pages/attendances/AttendancePage';
import { paletaColors } from '../themes/appTheme';
import { AbsencePage } from '../pages/attendances/AbsencePage';
const MTopTabs = createMaterialTopTabNavigator();

export const MTTabsAttendanceNavigator = () => {
  return (
    <MTopTabs.Navigator
    
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{ 
        
        tabBarStyle: {
          backgroundColor: paletaColors.secondary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIndicatorStyle: { 
          backgroundColor: paletaColors.tertiary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.30)',
        tabBarPressColor: paletaColors.secondary,
        
      }}
      
    >
        <MTopTabs.Screen name='RegistrationPage' options={{ tabBarLabel: 'Registros' }} component={RegistrationPage} />
        <MTopTabs.Screen name='AttendancePage' options={{ tabBarLabel: 'Asistencias' }} component={AttendancePage} />
        <MTopTabs.Screen name='AbsencePage' options={{ tabBarLabel: 'Inasistencia' }} component={AbsencePage} />
    </MTopTabs.Navigator>
  )
}

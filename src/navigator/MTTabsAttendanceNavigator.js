import React from 'react'
// Navegacion
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// Screens o Pages 
import { AttendancePage } from '../pages/attendances/AttendancePage';
import { paletaColors } from '../themes/appTheme';
import { AbsencePage } from '../pages/attendances/AbsencePage';
import { RecordsPage } from '../pages/attendances/RecordsPage';
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
        <MTopTabs.Screen name='AttendancePage' options={{ tabBarLabel: 'Asistenicias' }} component={AttendancePage} />
        <MTopTabs.Screen name='RecordsPage' options={{ tabBarLabel: 'Registros' }} component={RecordsPage} />
        <MTopTabs.Screen name='AbsencePage' options={{ tabBarLabel: 'Inasistencias' }} component={AbsencePage} />
    </MTopTabs.Navigator>
  )
}

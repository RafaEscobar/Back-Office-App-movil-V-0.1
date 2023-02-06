import React from 'react'
// Navegaciones
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Screens o Pages
import { AssignPage } from '../pages/extrahrs/AssignPage';
import { AssignedPage } from '../pages/extrahrs/AssignedPage';
import { paletaColors, paletaColorsSecond } from '../themes/appTheme';

const MTopTabs = createMaterialTopTabNavigator();

export const MTTabsExtraHrsNavigator = () => {
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
        tabBarActiveTintColor: paletaColorsSecond.primary,
        tabBarInactiveTintColor: paletaColorsSecond.secondary,
        tabBarPressColor: paletaColors.secondary,
        
      }}
    >
      <MTopTabs.Screen name='AssignPage' options={{ tabBarLabel: 'Asignar hrs extra' }} component={AssignPage} />
      <MTopTabs.Screen name='AssignedPage' options={{ tabBarLabel: 'Horas extra asignadas' }} component={AssignedPage} />
    </MTopTabs.Navigator>
  )
}

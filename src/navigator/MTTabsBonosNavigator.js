import React from 'react'
// Navegaciones
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Screens o Pages
import { paletaColors, paletaColorsSecond } from '../themes/appTheme';
import { TypeBonosPage } from '../pages/bonos/TypeBonosPage'; 
import { RankingBonoPage } from '../pages/bonos/RankingBonoPage';
import { UserBonoPage } from '../pages/bonos/UserBonoPage';

const MTopTabs = createMaterialTopTabNavigator();

export const MTTabsBonosNavigator = () => {
  return (
    <MTopTabs.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{ 
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIndicatorStyle: { 
          backgroundColor: paletaColors.tertiary,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
        tabBarActiveTintColor: paletaColorsSecond.primary,
        tabBarInactiveTintColor: paletaColorsSecond.secondary,
        tabBarPressColor: paletaColors.secondary,
        
      }}
    >
      <MTopTabs.Screen name='AssignPage' options={{ tabBarLabel: 'Usuario bonificado' }} component={UserBonoPage} />
      <MTopTabs.Screen name='AssignedPage' options={{ tabBarLabel: 'Ranking' }} component={RankingBonoPage} />
      <MTopTabs.Screen name='TypeBonosPage' options={{ tabBarLabel: 'Bonos' }} component={TypeBonosPage} />
    </MTopTabs.Navigator>
  )
}

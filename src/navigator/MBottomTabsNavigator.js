import React from 'react'
// Navegacion
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { StackAttendanceNavigator } from './StackAttendanceNavigator';

// Screens o Pages
import { ProfileScreen } from '../screens/ProfileScreen';
import { StaffScreen } from '../screens/StaffScreen';
import { MTTabsBonosNavigator } from './MTTabsBonosNavigator';
import { MTTabsAttendanceNavigator } from './MTTabsAttendanceNavigator';

// Iconos
import Icon from 'react-native-vector-icons/Ionicons';
import { paletaColorsSecond } from '../themes/appTheme';


const MBTabs = createMaterialBottomTabNavigator();

export const MBottomTabsNavigator = () => {
  return (
    <MBTabs.Navigator 
      sceneAnimationEnabled={true}
      shifting={true}
      barStyle={{ backgroundColor: 'white' }}
      screenOptions={ 
        ({route}) => ({
          tabBarIcon: () => {
            let myIcon = '';

            switch (route.name) {
              case 'MTTabsAttendanceNavigator':
                myIcon='checkmark-done';
              break;
              case 'MTTabsBonosNavigator':
                myIcon='gift';
              break;
              case 'StaffScreen':
                myIcon='people';
              break;
              case 'ProfileScreen':
                myIcon='person-circle'  ;
              break;
            
              default:
              break;
            }
            return <Icon name={myIcon} size={25} color={paletaColorsSecond.primary} />
          }
        })
       }
    >
        <MBTabs.Screen name='MTTabsAttendanceNavigator' options={{ tabBarLabel:'Asistencias' }} component={MTTabsAttendanceNavigator} />
        <MBTabs.Screen name='MTTabsBonosNavigator' options={{ tabBarLabel:'Bonos' }} component={MTTabsBonosNavigator} />
        <MBTabs.Screen name='StaffScreen' options={{ tabBarLabel:'Trabajadores' }} component={StaffScreen} />
        <MBTabs.Screen name='ProfileScreen' options={{ tabBarLabel:'Perfil' }} component={ProfileScreen} />
    </MBTabs.Navigator>
  )
}

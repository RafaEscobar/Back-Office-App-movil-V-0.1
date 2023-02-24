import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { AttendanceScreen } from '../screens/user/AttendanceScreen';
import { ProfileScreen } from '../screens/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import { MTTabsBonosUsersNavigator } from './MTTabsBonosUsersNavigator';
import { LoginScreen } from '../screens/LoginScreen';

export const MBottomTabsUserNavigator = () => {
    const MTabs = createMaterialBottomTabNavigator();
  return (
    <MTabs.Navigator
        sceneAnimationEnabled={true}
        shifting={true}
        barStyle={{backgroundColor: 'white'}}
        screenOptions={
            ({route}) => ({
                tabBarIcon: () => {
                    let my_icon = '';

                    switch(route.name){
                        case 'AttendanceScreen': 
                            my_icon='checkmark-done';
                        break;
                        case 'MTTabsBonosUsersNavigator':
                            my_icon='gift';
                        break;
                        case 'ProfileScreen':
                            my_icon='person-circle';
                        break;
                        default: 
                        break;
                    }
                    return <Icon name={my_icon} size={25} color='black' />
                }
            })
        }
    >
        <MTabs.Screen name='AttendanceScreen' options={{tabBarLabel:'Asistencias'}} component={AttendanceScreen} />
        <MTabs.Screen name='MTTabsBonosUsersNavigator' options={{tabBarLabel:'Bonos'}} component={MTTabsBonosUsersNavigator} />
        <MTabs.Screen name='ProfileScreen' options={{tabBarLabel:'Perfil'}} component={ProfileScreen} />
    </MTabs.Navigator>
  )
}

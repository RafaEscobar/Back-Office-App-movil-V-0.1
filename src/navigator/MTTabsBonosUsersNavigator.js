import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { MyBonosScreen } from '../screens/user/MyBonosScreen';
// import { TypeBonosPage } from '../pages/bonos/TypeBonosPage'
import {MyBonosScreen} from '../screens/user/MyBonosScreen'
import { TypeBonosPage } from '../pages/bonos/TypeBonosPage'


export const MTTabsBonosUsersNavigator = () => {
    const MTabs = createMaterialTopTabNavigator();
  return (
    <MTabs.Navigator>
        <MTabs.Screen name='MyBonosScreen' options={{tabBarLabel:'Mis bonos'}} component={MyBonosScreen} />
        <MTabs.Screen name='TypeBonosPage' options={{tabBarLabel:'Bonos disponibles'}} component={TypeBonosPage} />
    </MTabs.Navigator>
  )
}

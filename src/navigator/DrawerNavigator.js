import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { MBottomTabsNavigator } from './MBottomTabsNavigator';
import { CreateBonos } from '../pages/createBonos/CreateBonos';
import { CreatePuesto } from '../pages/createPuestos/CreatePuesto';
import { CreateUser } from '../pages/createUsers/CreateUser';

const Drawer = createDrawerNavigator();
 
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='MBottomTabsNavigator'  options={{headerShown: false, title: 'Inicio'}} component={MBottomTabsNavigator} />
        <Drawer.Screen name='CreateUser'  options={{headerShown: true,  title: 'Crear usuario'}} component={CreateUser} />
        <Drawer.Screen name='CreatePuesto'  options={{headerShown: true,  title: 'Crear puesto'}} component={CreatePuesto} />
        <Drawer.Screen name='CreateBonos'  options={{headerShown: true,  title: 'Crear bono'}} component={CreateBonos} />
    </Drawer.Navigator>
  )
}

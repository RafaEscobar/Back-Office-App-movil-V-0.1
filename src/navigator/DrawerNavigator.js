import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { MBottomTabsNavigator } from './MBottomTabsNavigator';
import { IndexB } from '../pages/createBonos/IndexB';
import { IndexP } from '../pages/createPuestos/IndexP';
import { IndexU } from '../pages/createUsers/IndexU';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='MBottomTabsNavigator' component={MBottomTabsNavigator} />
        <Drawer.Screen name='indexU' component={IndexU} />
        <Drawer.Screen name='indexP' component={IndexP} />
        <Drawer.Screen name='indexB' component={IndexB} />
    </Drawer.Navigator>
  )
}

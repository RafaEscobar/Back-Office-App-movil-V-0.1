import React from 'react'

// creates Naviagators
import { createStackNavigator } from '@react-navigation/stack'
import {IndexB} from '../pages/createBonos/IndexB'
import {IndexP} from '../pages/createPuestos/IndexP'
import {IndexU} from '../pages/createUsers/IndexU'
import { GeneradorScreen } from '../screens/GeneradorScreen'
import { CreateUser } from '../pages/createUsers/CreateUser';
import { CreateBonos } from '../pages/createBonos/CreateBonos';
import { CreatePuesto } from '../pages/createPuestos/CreatePuesto';

// Constantes para creates Navigators
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='GeneradorScreen' options={{headerShown:false}} component={GeneradorScreen} />
        <Stack.Screen name='IndexU' options={{ title:'Registros de usuarios' }} component={IndexU} />
        <Stack.Screen name='IndexP' options={{ title:'Registros de puestos' }} component={IndexP} />
        <Stack.Screen name='IndexB' options={{ title:'Registros de bonos'  }} component={IndexB} />
        <Stack.Screen name='CreateUser' options={{  title:'Crear usuario' }} component={CreateUser} />
        <Stack.Screen name='CreateBonos' options={{  title:'Crear bono'}} component={CreateBonos} />
        <Stack.Screen name='CreatePuesto' options={{ title:'Crear puesto' }} component={CreatePuesto} />
    </Stack.Navigator>
  )
}

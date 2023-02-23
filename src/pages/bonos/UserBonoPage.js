import React from 'react'
import { Text, View } from 'native-base'
import { StyleSheet } from 'react-native';
import { UserBonoComponent } from '../../components/UserBonoComponent'

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const UserBonoPage = () => {
  return (
        <View>
            <Text style={styless.title}>Lista de empleados con bono este mes</Text>
            <UserBonoComponent img_path={url_Provicional} fecha='10/03/2000' nombre='Rafael Escobar' turno='Primero' bono='Mensual' />
        </View>
    )
}

const styless = StyleSheet.create({  title: {
  fontSize: 18,
  fontWeight: '500',
  marginLeft: 22,
  marginTop: 20,
}});
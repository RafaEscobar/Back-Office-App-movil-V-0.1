import { Text, View } from 'native-base'
import React from 'react'
import { UserBonoComponent } from '../../components/UserBonoComponent'

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const UserBonoPage = () => {
  return (
        <View>
            <Text>Registro de usuarios con horas extra asignadas</Text>
            <UserBonoComponent img_path={url_Provicional} nombre='Rafael Escobar' turno='Primero' bono='Mensual' />
        </View>
    )
}

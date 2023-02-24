import React from 'react'
import {  View } from 'react-native'
import { Divider, HStack, Text } from 'native-base'
import { MyBonoComponent } from '../../components/user/MyBonoComponent'

export const MyBonosScreen = () => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <Text style={{fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft:20, marginBottom: 10  }}>Mis bonos obtenidos</Text>
        <MyBonoComponent fecha='01/01/2023' monto='200' nombre='Quincenal' />
    </View>
  )
}
  

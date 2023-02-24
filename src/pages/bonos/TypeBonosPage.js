import React from 'react'
import {View, Text, Box} from 'native-base'
import { BonosComponent } from '../../components/BonosComponent'
import { StyleSheet } from 'react-native'

export const TypeBonosPage = () => {
  return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <Text style={styless.title}>Tipos de bonos</Text>
                <BonosComponent nombre='Mensual' descripcion='Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
                <BonosComponent nombre='Mensual' descripcion='Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
        </View>
    )
}

const styless = StyleSheet.create({  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 22,
    marginTop: 20,
}});
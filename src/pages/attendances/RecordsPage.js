import React from 'react'
import { Text, View } from 'native-base'
import { StyleSheet } from 'react-native'

import { RecordsComponent } from '../../components/RecordsComponent'

export const RecordsPage = () => {
  return (
    <View>
        <Text style={styless.title}>Registro de entradas y salidas</Text>
        <RecordsComponent nombre='Rafael Escobar' puesto='Gerente' entrada='08:00' salida='14:00' horas='06' />
    </View>
  )
}

const styless = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 22,
    marginTop: 20,
  }

});
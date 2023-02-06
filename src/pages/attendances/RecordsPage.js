import { Text, View } from 'native-base'
import React from 'react'
import { RecordsComponent } from '../../components/RecordsComponent'

export const RecordsPage = () => {
  return (
    <View>
        <Text>Tabla de Asistencias</Text>
        <RecordsComponent nombre='Rafael Escobar' puesto='Gerente' entrada='08:00' salida='14:00' horas='06' />
    </View>
  )
}

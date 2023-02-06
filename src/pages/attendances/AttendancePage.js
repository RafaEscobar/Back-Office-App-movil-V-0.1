import { Text, View } from 'native-base'
import React from 'react'
import { AttendanceComponent } from '../../components/AttendanceComponent'

export const AttendancePage = () => {
  return (
    <View>
        <Text>Tabla de Asistencias</Text>
        <AttendanceComponent nombre='Rafael Escobar' puesto='Gerente' entrada='08:00' salida='14:00' horas='06' />
    </View>
  )
}

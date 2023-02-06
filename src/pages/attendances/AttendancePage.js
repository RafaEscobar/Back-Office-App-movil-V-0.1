import { Text, View } from 'native-base'
import React from 'react'
import { AttendanceComponent } from '../../components/AttendanceComponent'

export const AttendancePage = () => {
  return (
    <View>
        <Text>Tabla de Asistencias</Text>
        <AttendanceComponent nombre='Rafael Escobar' noControl='222111269' entrada='08:00' salida='14:00' horas='06' />
    </View>
  )
}

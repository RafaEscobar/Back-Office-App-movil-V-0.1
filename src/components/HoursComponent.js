import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme'

interface Props {
    img_path: string,
    nombre: string,
    fecha: string,
    noControl: string,
    hrsAsignadas: string
}

export const HoursComponent = ({ img_path, nombre, fecha, noControl, hrsAsignadas }: Props) => {
  return (
    <Box style={styles.boxCenter}>
        <Box style={styles.boxAccess}>
          <Box style={{marginRight: 20}}>
            <Avatar bg="cyan.500" source={{ uri: img_path}}></Avatar>
          </Box>
          <Box style={{marginRight: 20}}>
            <Text style={{marginBottom: 7}}>{nombre}</Text>
            <Text>{fecha}</Text>
          </Box>
          <Box>
            <Text style={{marginBottom: 7}}>Id: {noControl}</Text>
            <Text>Asignadas: {hrsAsignadas}hrs</Text>
          </Box>
        </Box>
    </Box>
    )
}

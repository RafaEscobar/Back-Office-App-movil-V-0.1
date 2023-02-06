import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme'

interface Props {
    img_path: string,
    nombre: string,
    turno: string,
    bono: string
}

export const UserBonoComponent = ({ img_path, nombre, turno, bono }: Props) => {
  return (
    <Box style={styles.boxCenter}>
        <Box style={styles.boxAccess}>
          <Box style={{marginLeft: 8, marginRight: 20}}>
            <Avatar bg="cyan.500" source={{ uri: img_path}}></Avatar>
          </Box>
          <Box style={{marginRight: 45}}>
            <Text style={{marginBottom: 7}}>{nombre}</Text>
            <Text>Turno: {turno}</Text>
          </Box>
          <Box>
            <Text style={{marginBottom: 7}}>Tipo de bono:</Text>
            <Text>{bono}</Text>
          </Box>
        </Box>
    </Box>
    )
}

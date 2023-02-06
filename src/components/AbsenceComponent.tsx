import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles, paletaColorsSecond } from '../themes/appTheme';

interface Props {
    img_path: string,
    nombre: string,
    fecha: string,
    noControl: string,
    estatus: string,
}

export const AbsenceComponent = ({ img_path, nombre, fecha, noControl, estatus }: Props) => {
  return (
    <Box style={{...styles.boxCenter, }}>
        <Box style={{...styles.boxAccess, backgroundColor: paletaColorsSecond.tertiary}}>
          <Box style={styless.img_marginRight}>
            <Avatar bg="cyan.500" source={{ uri: img_path}}>           
            </Avatar>
          </Box>
            <Box style={styless.box_marginRight}>
              <Text style={{marginBottom: 7}}>{nombre}</Text>
              <Text style={styless.text_small}>{fecha}</Text>
            </Box>
            <Box >
              <Text style={{marginBottom: 7}}>Id: {noControl}</Text>
              <Text style={styless.text_small}>{estatus}</Text>
            </Box>
        </Box>
    </Box>
  )
}

const styless = StyleSheet.create({
    img_marginRight: {
        marginRight: 15
    },
    box_marginRight: {
        marginRight: 20
    },
    text_small: {
        fontSize:12
    }
});
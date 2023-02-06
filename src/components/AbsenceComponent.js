import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles, paletaColorsSecond } from '../themes/appTheme';

interface Props {
    img_path: string,
    nombre: string,
    turno: string,
    puesto: string,
}

export const AbsenceComponent = ({ img_path, nombre, turno, puesto }: Props) => {
  return (
    <Box style={{...styles.boxCenter, }}>
        <Box style={{...styles.boxAccess, backgroundColor: paletaColorsSecond.tertiary}}>
          <Box style={styless.img_marginRight}>
            <Avatar bg="cyan.500" source={{ uri: img_path}}>           
            </Avatar>
          </Box>
            <Box style={styless.box_marginRight}>
              <Text style={{marginBottom: 7}}>{nombre}</Text>
              <Text >{turno}</Text>
            </Box>
            <Box style={styless.boxMargin}>
              <Text>Puesto:</Text>
              <Text style={styless.txtTop}>{puesto}</Text>
        </Box>
        </Box>
    </Box>
  )
}

const styless = StyleSheet.create({
    img_marginRight: {
        marginHorizontal: 10
    },
    box_marginRight: {
        marginRight: 20,
        marginLeft:10,
    },
    text_small: {
        fontSize:12
    },
    boxMargin: {
      marginLeft: 40,
    },
    txtTop: {
      marginTop: 6
    }

});
import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme';
import { StyleSheet } from 'react-native';

interface Props {
  img_path: string,
  nombre: string,
  entrada: string,
  turno: string,
}

export const AccessComponent = ({ img_path, nombre, entrada, turno }: Props) => {
  return (
    <Box style={styles.boxCenter}>
      <Box style={styles.boxAccess}>
        <Box style={styless.boxImg}>
          <Avatar bg="cyan.500" source={{ uri: img_path}}></Avatar>
        </Box>
        <Box style={styless.boxes}>
          <Text>{nombre}</Text>
          <Text style={styless.txtTop}>Entrada: {entrada}</Text>
        </Box>
        <Box style={styless.boxmargingL}>
          <Text>Turno:</Text>
          <Text style={styless.txtTop}>{turno}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const styless = StyleSheet.create({

  boxImg: {
    marginRight: 15,
    marginLeft: 7,
  },
  boxes: {
    flex:3,
    marginLeft: 15,
  },
  boxmargingL: {
    flex: 2,
    // backgroundColor: 'yellow'
  },
  txtTop: {
    top: 5,
  },

});

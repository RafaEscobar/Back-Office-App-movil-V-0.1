import React from 'react'
import { Avatar, Box, Text } from 'native-base'
import { styles } from '../themes/appTheme'
import { StyleSheet } from 'react-native'

export const UserBonoComponent = ({ img_path, nombre, turno, bono, fecha }) => {
  return (
    <Box style={styles.boxCenter}>
      <Box style={styles.boxAccess}>
        <Box style={styless.boxImg}>
          <Avatar bg="cyan.500" source={{ uri: img_path}} ></Avatar>
        </Box>
        <Box style={styless.boxes}>
          <Text style={styless.title}>{nombre}</Text>
          <Text style={styless.txt}>Bono: {bono}</Text>
        </Box>
        <Box style={styless.boxmargingL}>
          <Text style={styless.title}>Fecha:</Text>
          <Text style={styless.txt}>{fecha}</Text>
        </Box>
      </Box>
    </Box>
    )
}

const styless = StyleSheet.create({
  // Caja imagen
  boxImg: {
    marginRight: 15,
    marginLeft: 7,
  },
  // Titulos
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  // Texto interno (No incluye titulos)
  txt: {
    top: 5,
  },
  // Disposicion interna de la caja
  boxes: {
    
    flex:3,
    marginLeft: 15,
  },
  // Espaciado entre columnas de texto
  boxmargingL: {
    flex: 2,
  },
});

import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme'
import { StyleSheet } from 'react-native';

interface Props {
    img_path: string,
    nombre: string,
    noControl: string,
}

export const AddHoursComponent = ({ img_path, nombre, noControl }: Props) => {
  return (
    <Box style={styles.boxCenter}>
        <Box style={styles.boxHoras}>
          <Box style={ styless.boxMargingRight }>
            <Avatar bg="cyan.500" source={{ uri: img_path}}>           
            </Avatar>
          </Box>
          <Box style={ styless.boxMargingRight }>
            <Text>{nombre}</Text>
          </Box>
          <Box >
            <Text>Identificador: {noControl}</Text>
          </Box>
        </Box>
    </Box>
  )
}

const styless = StyleSheet.create({

    boxMargingRight: {
        marginRight: 20,
    }

});
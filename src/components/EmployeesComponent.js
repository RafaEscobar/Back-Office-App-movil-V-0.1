import { Avatar, Box } from 'native-base';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
    img_path: string,
    nombre: string,
    cargo: string,
    turno: string,
    id: string,
  }

export const EmployeesComponent = ({img_path, cargo, nombre, turno, id}: Props) => {
  return (
        <Box style={styles.boxCenter}>
            <Box style={styles.boxAccess1}>
              <Box style={styless.boxImg}>
                <Avatar bg="cyan.500" source={{ uri: img_path}}></Avatar>
              </Box>
              <Box style={styless.boxes}>
                <Text style={{color: 'black'}}>{nombre}</Text>
                <Text style={{...styless.txtTop, color:'black'}}>{cargo}</Text>
              </Box>
              <Box style={styless.boxes}>
                <Text style={{color: 'black'}}>Id: {id}</Text>
                <Text style={{...styless.txtTop, color:'black'}}>Turno: {turno}</Text>
              </Box>
            </Box>
        </Box>
    )
}

const styless = StyleSheet.create({
    boxImg: {
      marginRight: 15,
    },
    boxes: {
      flex:3, 
      marginRight: 15,
    },
    txtTop: {
      top: 5,
    },
  });
  
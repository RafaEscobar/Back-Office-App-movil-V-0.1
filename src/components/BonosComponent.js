import { Avatar, Box } from 'native-base';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
    nombre: string,
    descripcion: string,
  }

export const BonosComponent = ({nombre, descripcion }: Props) => {
  return (
<Box style={styles.boxCenter}>
        <Box style={styles.boxAttendance}>
            <Box style={styless.boxPrincipal}>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5, color:'black'}}>{nombre}</Text>
            </Box>
            <Box style={styless.boxSecond}>
                <Box style={styless.box}>
                  <Text style={{color:'black', fontSize: 11}}>{descripcion}</Text>
                </Box>
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
  });
  
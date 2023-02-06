import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme';
import { StyleSheet } from 'react-native';

interface Props {
    nombre: string,
    noControl: string,
    entrada: string,
    salida: string,
    horas: string,
}

export const AttendanceComponent = ({nombre, noControl, entrada, salida, horas}:Props) => {
  return (
    <Box style={styles.boxCenter}>
        <Box style={styles.boxAttendance}>
            <Box style={styless.boxPrincipal}>
                <Text>{nombre}</Text>
                <Text>Identificador: {noControl}</Text>
            </Box>
            <Box style={styless.boxSecond}>
                <Box style={styless.box}>
                    <Text>Entrada:</Text>
                    <Text>{entrada}</Text>
                </Box>
                <Box style={styless.box}>
                    <Text>Salida:</Text>
                    <Text>{salida}</Text>
                </Box>
                <Box style={styless.box}>
                    <Text>Horas:</Text>
                    <Text>{horas}</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

const styless = StyleSheet.create({
    boxPrincipal: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        marginBottom: 15
    },
    boxSecond: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
    },
    box: {
        alignItems: 'center'
    }
});
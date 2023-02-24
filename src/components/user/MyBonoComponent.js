import React from 'react'
import { paletaColors } from '../../themes/appTheme'
import { StyleSheet, View } from 'react-native'
import { Box, Text } from 'native-base'

export const MyBonoComponent = ({nombre, monto, fecha}) => {
  return (
    <Box style={styles.box}>
        <Box style={styles.internalBox}>
            <Text style={styles.txt}>Bono: {nombre} </Text>
            <Text style={styles.txt}>Monto: ${monto}</Text>
        </Box>
        <Box style={styles.secondBox}>
            <Text style={styles.txt}>Fecha: {fecha}</Text>
        </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        backgroundColor: paletaColors.secondary,
        width: '100%',
        height: 95,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 25
    },
    internalBox: {
        justifyContent: 'space-around',
        // backgroundColor: 'yellow',
        height: 65,
    },
    txt: {
        fontSize: 16,
        fontWeight: '500'
    },
})
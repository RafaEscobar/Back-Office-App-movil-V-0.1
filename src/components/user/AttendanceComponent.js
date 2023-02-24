import React from 'react'
import {StyleSheet} from 'react-native'
import { styles } from '../../themes/appTheme'
import { Box, Text, Avatar } from 'native-base'

export const AttendanceComponent = ({img_path, fecha, hora}) => {
  return (
    <Box style={styles.boxCenter}>
    <Box style={styles.boxAccess}>
      <Box style={styless.boxImg}>
        <Avatar bg="cyan.500" source={{ uri: img_path}}></Avatar>
      </Box>
      <Box style={styless.boxes}>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 5}}>Fecha:</Text>
        <Text style={{fontSize: 16}}>{fecha}</Text>
      </Box>
      <Box style={styless.boxmargingL}>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 5}}>Hora de entrada:</Text>
        <Text style={{fontSize: 16}}>{hora}</Text>
      </Box>
    </Box>
  </Box>
    )
}

const styless = StyleSheet.create({

    boxImg: {
      marginRight: 20,
      marginLeft: 10,
    },
    boxes: {
      marginRight: 28
    },
    txtTop: {
      top: 5,
    },
  
  });
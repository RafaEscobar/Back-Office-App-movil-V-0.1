import { Box, Text } from 'native-base'
import React from 'react'
import {StyleSheet} from 'react-native'
import { IndexPComponent } from '../../components/indexes/IndexPComponent'


export const IndexP = () => {
  return (
    <Box style={{flex:1, backgroundColor: 'white'}}>
      <Text style={style.title}>Registros de Puestos</Text>
      <IndexPComponent salario={1200} nombre='Primero' />
  </Box>
  )
}

const style = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
  },
})

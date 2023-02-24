import React from 'react'
import { Box, Text } from 'native-base'
import { IndexBComponent } from '../../components/indexes/IndexBComponent'
import {StyleSheet} from 'react-native'

export const IndexB = () => {
  return (
    <Box style={{flex:1, backgroundColor: 'white'}}>
      <Text style={style.title}>Registros de Bonos</Text>
      <IndexBComponent bono='Quincenal' monto={200} />
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
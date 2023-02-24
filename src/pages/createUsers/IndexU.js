import React from 'react'
import { Box, Text, Avatar, Button } from 'native-base'
import {StyleSheet} from 'react-native'
import { IndexUComponent } from '../../components/indexes/IndexUComponent'

export const IndexU = () => {
  return (
    <Box style={{flex:1, backgroundColor: 'white'}}>
      <Text style={style.title}>Registros de usuarios</Text>
      <IndexUComponent nombre='Alin Amparo' puesto='Gerente' />
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

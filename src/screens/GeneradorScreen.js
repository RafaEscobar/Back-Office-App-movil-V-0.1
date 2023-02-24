import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Box, Image, Text, Divider, HStack } from 'native-base'
import { GeneratorComponent } from '../components/GeneratorComponent'


export const GeneradorScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <HStack bg="#ffff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
            <HStack alignItems="center">
                <Text color="black" fontSize="20" fontWeight="bold" style={{left: 15}}>Datos del usuario</Text>
            </HStack>
        </HStack>
        <Divider my="2" _dark={{bg: "muted.50" }} style={{bottom: 5}} /> 
        <GeneratorComponent mensaje='Registros de usuarios' ruta='IndexU' />
        <GeneratorComponent mensaje='Registros de puestos' ruta='IndexP' />
        <GeneratorComponent mensaje='Registros de bonos' ruta='IndexB' />

    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 13,
      marginHorizontal: 20,
      top: 5
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 25,
      width: '70%',
      marginVertical: 10,
    },
    elevation: {
      elevation: 30,
      shadowColor: '#000',
    },
  });
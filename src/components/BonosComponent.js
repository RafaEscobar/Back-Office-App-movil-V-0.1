import { Avatar, Box, View } from 'native-base';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { paletaColors } from '../themes/appTheme';

export const BonosComponent = ({nombre, descripcion}) => {
  return (
    <Box style={styless.boxA}>
      <Box style={styless.box}>
        <Box>
          <Text style={styless.title}>{nombre}</Text>
        </Box>
          <Box style={styless.boxDes}>
            <Text style={styless.description}>{descripcion}</Text>
          </Box>
      </Box>
    </Box>
    )
}

const styless = StyleSheet.create({

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      bottom: 7,
      color:'black',
      marginLeft: 25
    },
    boxA: {
      alignItems: 'center',
      marginTop: 20,
    },
    box: {
      width: '100%',
      height: 120,
      backgroundColor: paletaColors.secondary,
      justifyContent: 'center',
      marginTop: 7
    },
    description: {
      fontSize: 16,
      textAlign: 'justify',
      marginLeft: 25,
      color: 'black'
    },
    boxDes: {
      width: 365
    }


  });
  
import React from 'react'
import { Box, Text, Avatar, Button } from 'native-base'
import {StyleSheet} from 'react-native'
import { paletaColors} from '../../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const IndexBComponent = ({bono, monto }) => {
    const navigation = useNavigation();
  return (
    <Box style={style.box}>
        <Box style={style.internalBox}>
          <Text style={style.txt}>Bono: {bono} </Text>
          <Text style={style.txt}>Monto ${monto}</Text>
        </Box> 
        <Box style={{...style.internalBox, marginLeft: 75}}>
          <Button onPress={()=> navigation.navigate('CreateBonos')} variant="ghost" colorScheme="black" leftIcon={<Icon name='create-outline' size={20} color='black' />} _text={{fontSize: 16, fontWeight: '600', color: 'black'}}>Editar</Button>
          <Button variant="ghost" colorScheme="black" leftIcon={<Icon name='close-circle-outline' size={20} color='black' />} _text={{fontSize: 16, fontWeight: '600', color: 'black'}} >Eliminar</Button>
        </Box> 
    </Box>
  )
}


const style = StyleSheet.create({

    box: {
      width: '100%',
      height: 110,
      backgroundColor: paletaColors.secondary,
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center'
    },
    internalBox:{
      marginLeft: 50,
      height: 80,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start'
      
    },
    title: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 15,
    },
    txt: {
      fontSize: 16
    },
  })
  
  
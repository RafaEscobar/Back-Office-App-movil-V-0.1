import React from 'react'
import { Box, Text, Avatar, Button } from 'native-base'
import {StyleSheet} from 'react-native'
import { paletaColors} from '../../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const IndexUComponent = ({nombre, puesto}) => {
    const navigation = useNavigation();
  return (
    <Box style={style.box}>
        <Box style={style.imgBox}>
          <Avatar  vatar bg="purple.600" alignSelf="center" size="lg" source={{ uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}}></Avatar>
        </Box>
        <Box style={style.internalBox}>
          <Text style={style.txt}>Nombre: {nombre}</Text>
          <Text style={style.txt}>Puesto: {puesto}</Text>
        </Box> 
        <Box style={{...style.internalBox, marginLeft: 25}}>
          <Button onPress={() => navigation.navigate('CreateUser')} variant="ghost" colorScheme="black" leftIcon={<Icon name='create-outline' size={20} color='black' />} _text={{fontSize: 16, fontWeight: '600', color: 'black'}}>Editar</Button>
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
      marginLeft: 15,
      height: 80,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start'
      
    },
    imgBox: {
      marginLeft: 15
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
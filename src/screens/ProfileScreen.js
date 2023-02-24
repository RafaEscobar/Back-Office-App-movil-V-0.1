import { Box, Image, Text, Divider, HStack } from 'native-base'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { paletaColors } from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = () => {
  return (
    <ScrollView >
        
        <Box style={styless.conatiner}>
            <HStack bg="#ffff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
                <HStack alignItems="center">
                    <Text color="black" fontSize="20" fontWeight="bold" style={{left: 15}}>Datos del usuario</Text>
                </HStack>
            </HStack>
            <Divider my="2" _dark={{bg: "muted.50" }} style={{bottom: 5}} />   
            <Box style={styless.boxImg}>
                <Image size={280} source={{uri: "https://api.lorem.space/image/face?w=150&h=150"}} alt='UserImg' borderRadius={180} />
            </Box>
            <Box style={styless.boxDetailsA}>    
                <Box style={styless.boxDetails}>
                    <Text style={styless.title}>Datos personales: </Text>
                    <Box style={{flexDirection: 'row'}}>
                        <Box style={{...styless.colums, marginLeft: 25}}>
                            <Text style={styless.dato}>Nombre: </Text>
                            <Text style={{ ...styless.txt, marginBottom: 20}}>Nombre </Text>
                            
                            <Text style={styless.dato}>Apellidos: </Text>
                            <Text>Apellidos </Text>
                        </Box>
                        <Box style={styless.colums}>
                            <Text style={styless.dato}>Rol: </Text>
                            <Text style={{ ...styless.txt, marginBottom: 20}}>Rol </Text>
                            
                            <Text style={styless.dato}>Email: </Text>
                            <Text>Correo electronico</Text>  
                        </Box>
                    </Box>
                </Box>
            </Box>
            <TouchableOpacity>
                <Box style={styless.boxSesion}>
                    <Text style={styless.txtSesion}>Cerrar sesión</Text>
                    <Icon name='exit' size={35} color='black'/>
                </Box>
            </TouchableOpacity>
        </Box>

    </ScrollView>
    )
}

const styless = StyleSheet.create({

    conatiner: {
        backgroundColor: 'white',
    },
    boxImg: {
        alignItems: 'center',
        marginTop: 50,
    },
    boxDetailsA:{
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
    },
    boxDetails: {
        backgroundColor: paletaColors.secondary,
        width: 350,
        height: 200,
        borderWidth: 1,
        borderRadius: 10
    },
    title: {
        fontSize: 20, 
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 15,
    },
    colums: {
        marginTop: 20,
        marginRight: 85
    },
    dato: {
        fontSize: 18,
        fontWeight: '500'
    },
    txt: {
        fontSize: 16,
    },
    boxSesion: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
        height: 100
    },
    txtSesion: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    }

});
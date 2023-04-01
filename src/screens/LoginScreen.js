import React, { useState } from 'react'
import { Box, VStack, Text, useToast, ScrollView } from 'native-base'
import {Image, View, TextInput, Button, AsyncStorage, Alert} from 'react-native';
import axios from 'axios';


export const LoginScreen = ({navigation}) => {
    const toast = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mensaje = [{status: "error",title: "Credenciales invalidas!"}];

    const handleLogin = () => {
      axios.post('https://araprojects.website/api/auth/login', {
        email: email,
        password: password
      })
      .then(response => {
        if(response.data.access_token){
          console.log(response.data.access_token);
          navigation.replace('MBottomTabsNavigator');
        }else{
          console.log("You don't have any access token, Pendejo");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error', 'Credenciales incorrectas', [{ text: 'OK' }]);
      });
    };
  

    // const handleSubmitPress = () => {
        
    //         // console.log(email.correo);
    //         if (email===baseEmail && contra==baseContra) {
    //           // navigation.replace('MBottomTabsNavigator');
    //           navigation.replace('DrawerNavigator');
    //         } else if(email===userEmail && contra==userContra){
    //           navigation.replace('MBottomTabsUserNavigator');
    //           // navigation.replace('DrawerNavigator');
    //         }else {
    //             toast.show({
    //                 render: () => {
    //                   return <Box bg="red.500" px="2" py="1" rounded="sm" mb={5} _text={{color: 'black', fontWeight:'500'}}>
    //                           Error, credenciales de acceso invalidas!!
    //                         </Box>;
    //                 }
    //               });
    //         }
    //   };

  return (
    <ScrollView>
        <Box safeArea p="2" py="8" px='10' w="100%"  style={{flex:1, backgroundColor: 'white'}}>
            <Text style={{fontSize: 40, fontWeight: '500', textAlign: 'center', paddingTop:18, marginTop: 15, marginBottom: 20}}>Bienvenido!!!!</Text>
            <Box style={{width: '100%', alignItems: 'center'}}>
                <Image source={require('../imgs/usuario.png')} style={{width: 300, height: 300}} />
            </Box>
            <Text style={{fontWeight: '500', fontSize: 16}}>Inicia sesión para continuar...</Text>          
            <VStack space={3} mt="5" style={{marginBottom: 30}}>
              {/* <FormControl>
                  <FormControl.Label _text={{fontSize: 18}}>Correo electronico: </FormControl.Label>
                  <Input type='text' onChangeText={text => setEmail(text)} value={email} />
              </FormControl>
              <FormControl>
                  <FormControl.Label _text={{fontSize: 18}}>Contraseña</FormControl.Label>
                  <Input type="password" onChangeText={text => setPassword(text)} value={password} />
              </FormControl>
              <Button mt="2" style={{backgroundColor: '#6eb2ea', marginBottom: 10, marginTop: 40}} _text={{color: 'black', fontWeight: '500', fontSize:16}} onPress={handleLogin}>
                  Iniciar sesión
              </Button> */}
                <TextInput
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                  value={email}
                />
                <TextInput
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                  value={password}
                  secureTextEntry
                />
                <Button title="Log in" onPress={handleLogin} />
            </VStack>
        </Box>
    </ScrollView>
  )
}

import React from 'react'
import { Text, View, Box, Divider, HStack, ScrollView } from 'native-base'
import { paletaColors, styles } from '../themes/appTheme';
import { StyleSheet } from 'react-native';

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const StaffScreen = () => {
  return (

    <ScrollView>
      <View style={styless.container}>
          <HStack bg="#ffff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
            <HStack alignItems="center">
              <Text color="black" fontSize="20" fontWeight="bold" style={{left: 15}}>Sistema</Text>
            </HStack>
          </HStack>
          <Divider my="2" _dark={{bg: "muted.50" }} style={{bottom: 5}} /> 
          <Box style={{padding: 20}}>
            <Text style={styles.title1}>Estatus del sistema: ON</Text>
            <Box style={styless.boxTitle}>
              <Text style={styless.title}>Temperatura</Text>
              <Box style={styless.boxSubtitle}>
                <Text style={styless.subTitle}>Alimentación de energía (Panel solar)</Text>
                <Text style={styless.data}>- Temperatura: 0°</Text>
                <Text style={styless.data}>- Estado: Aceptable</Text>
              </Box>
              <Box style={styless.boxInfo}>
                <Text style={styless.txt}>La temperatura del panel solar se mide en tiempo real y permite conocer el buen estado del mismo en base a la tolerancia al calor apegándonos a un estándar de temperatura adecuada.</Text>
              </Box>
            </Box>
            <Box style={styless.boxTitle}>
              <Text style={styless.title}>Voltaje</Text>
              <Box style={styless.boxSubtitle}>
                <Text style={styless.subTitle}>Alimentación de energía (Panel solar)</Text>
                <Text style={styless.data}>- Volaje: 0v</Text>
                <Text style={styless.data}>- Estado: Aceptable</Text>
              </Box>
              <Box style={styless.boxInfo}>
                <Text style={styless.txt}>El voltaje del panel solar se mide en tiempo real y permite conocer la capacidad de producción de corriente eléctrica para la alimentación principal de los componentes que conforman al sistema de IoT</Text>
              </Box>
            </Box>
          </Box>
      </View>
    </ScrollView>
  )
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  boxTitle: {
    marginTop: 35
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 15
  },
  boxSubtitle: {
    marginLeft: 30
  },
  data:{
    fontSize: 15,
    marginBottom: 12
  },
  boxInfo: {
    width: '100%',
    height: 100,
    backgroundColor: paletaColors.secondary,
    padding: 20,
    marginTop: 15,
  },
  txt: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'justify'
  }

});

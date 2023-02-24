import React from 'react'
import { Stack, Input, Button, FormControl, Radio, Box, TextArea } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'


export const CreateBonos = () => {
  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Bono: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre del bono " />
                <FormControl.Label style={styles.txt}>Monto:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el monto a pagar por el bono" />
                <FormControl.Label style={styles.txt}>Descripción: </FormControl.Label>
                <TextArea h={20} placeholder="Ingresa la descripción del bono" w="100%" />
                <Button size="sm" variant="outline" style={{marginTop: 235}}>Enviar</Button>
                <Box style={{marginBottom: 40}}></Box>
            </FormControl>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    txt: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 25
    },
    box: {
        width: '80%',
        
    }

})
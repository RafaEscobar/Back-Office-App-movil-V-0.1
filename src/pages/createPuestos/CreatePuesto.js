import React from 'react'
import { Stack, Input, Button, FormControl, Radio, Box } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'

export const CreatePuesto = () => {
  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Nombre:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre del puesto" />
                <FormControl.Label style={styles.txt}>Salario:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el salario del puesto" />
                <FormControl.Label style={styles.txt}>Estatus:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el estatus del puesto" />
                <FormControl.Label style={styles.txt}>Rol:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el rol con el que cuenta el puesto" />
                <FormControl.Label style={styles.txt}>Área:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el área del puesto" />

                <Button size="sm" variant="outline" style={{marginTop: 80}}>Enviar</Button>
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
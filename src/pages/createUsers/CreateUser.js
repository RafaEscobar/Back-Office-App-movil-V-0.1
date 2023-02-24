import React from 'react'
import { Stack, Input, Button, FormControl, Radio, Box } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'

export const CreateUser = () => {
  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Nombre: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre " />
                <FormControl.Label style={styles.txt}>Primer apellido</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el primer apellido" />
                <FormControl.Label style={styles.txt}>Segundo apellido</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el segundo apellido" />
                <FormControl.Label style={styles.txt}>Fecha de nacimiento</FormControl.Label>
                <Input variant="underlined" placeholder="Formato: dd/mm/yy" />
                <FormControl.Label _text={{ fontSize: "lg", bold: true}}>
                    Selecciona el genero:
                </FormControl.Label>
                <Radio.Group name="exampleGroup" accessibilityLabel="select prize" >
                    <Radio value="1" my="1">Masculino</Radio>
                    <Radio value="2" my="1">Femenino</Radio>
                </Radio.Group>
                <FormControl.Label style={styles.txt}>Correo electronico: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el correo electronico" />
                <FormControl.Label style={styles.txt}>Contraseña: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa la contraseña" />
                <FormControl.Label style={styles.txt}>Puesto: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el puesto" />
                <Button size="sm" variant="outline" style={{marginVertical: 35}}>Enviar</Button>
                <Box style={{marginBottom: 10}}></Box>
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
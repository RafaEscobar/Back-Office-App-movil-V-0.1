import React from 'react'
import { Stack, Input, Button, FormControl, Radio, Box } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'
import { useFormik } from 'formik'

export const CreatePuesto = () => {

    const {values, setFieldValue} = useFormik({
        initialValues: {
            nombre: '',
            salario: '',
            estatus: 'activo',
            rol: '',
            area: '',
        },
    });

  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Nombre:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre del puesto" value={values.nombre} onChangeText={text => setFieldValue('nombre', text)} />
                <FormControl.Label style={styles.txt}>Salario:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el salario del puesto" value={values.salario} onChangeText={text => setFieldValue('salario', text)} />
                <FormControl.Label style={styles.txt}>Estatus:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el estatus del puesto" value={values.estatus} onChangeText={text => setFieldValue('estatus', text)} />
                <FormControl.Label style={styles.txt}>Rol:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el rol con el que cuenta el puesto" value={values.rol} onChangeText={text => setFieldValue('rol', text)} />
                <FormControl.Label style={styles.txt}>Área:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el área del puesto" value={values.area} onChangeText={text => setFieldValue('area', text)} />

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
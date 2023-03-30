import React from 'react'
import { Stack, Input, FormControl, Radio, Box, TextArea } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'
import { useFormik } from 'formik'
import { Button } from "@react-native-material/core";

export const CreateBonos = () => {
    const {values, setFieldValue} = useFormik({
        initialValues: {
            bono: '',
            monto: '',
            descripcion: '',
        },
    });
  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Bono: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre del bono" value={values.bono} onChangeText={text => setFieldValue('bono', text)} />
                <FormControl.Label style={styles.txt}>Monto:</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el monto a pagar por el bono" value={values.monto} onChangeText={text => setFieldValue('monto', text)} />
                <FormControl.Label style={styles.txt}>Descripción: </FormControl.Label>
                <TextArea h={20} placeholder="Ingresa la descripción del bono" w="100%" value={values.descripcion} onChangeText={text => setFieldValue('descripcion', text)} />

                <Button title="Enviar" onPress={() => alert("Guardado")} style={{marginTop: 250}} />
                {/* <Button size="sm" variant="outline" style={{marginTop: 235}}>Enviar</Button> */}
                <Box style={{marginBottom: 50}}></Box>
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
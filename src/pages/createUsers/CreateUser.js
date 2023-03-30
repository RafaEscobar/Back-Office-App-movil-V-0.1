import React from 'react'
import { Stack, Input, FormControl, Radio, Box } from 'native-base'
import {View, StyleSheet, ScrollView,} from 'react-native'
import { useFormik } from 'formik'
import { Button } from "@react-native-material/core";

export const CreateUser = () => {

    const {values, setFieldValue} = useFormik({
        initialValues: {
            nombre: '',
            appA: '',
            appB: '',
            fechaN: '',
            genero: '0',
            correo: '',
            contra: '',
            puesto: ''
        },
    });

  return (
    <ScrollView >
        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
            <FormControl style={styles.box}>
                <FormControl.Label style={styles.txt}>Nombre: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el nombre" value={values.nombre} onChangeText={text => setFieldValue('nombre', text)}/>
                <FormControl.Label style={styles.txt}>Primer apellido</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el primer apellido" value={values.appA} onChangeText={text => setFieldValue('appA', text)} />
                <FormControl.Label style={styles.txt}>Segundo apellido</FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el segundo apellido" value={values.appB} onChangeText={text => setFieldValue('appB', text)}/>
                <FormControl.Label style={styles.txt}>Fecha de nacimiento</FormControl.Label>
                <Input variant="underlined" placeholder="Formato: dd/mm/yy" value={values.fechaN} onChangeText={text => setFieldValue('fechaN', text)} />
                <FormControl.Label _text={{ fontSize: "lg", bold: true}}>
                    Selecciona el genero:
                </FormControl.Label>
                <Radio.Group name="exampleGroup" accessibilityLabel="select prize" defaultValue={values.genero}>
                    <Radio value="Masculino" my="1">Masculino</Radio>
                    <Radio value="Femenino" my="1">Femenino</Radio>
                </Radio.Group>
                <FormControl.Label style={styles.txt}>Correo electronico: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el correo electronico" value={values.correo} onChangeText={text => setFieldValue('correo', text)} />
                <FormControl.Label style={styles.txt}>Contraseña: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa la contraseña" value={values.contra} onChangeText={text => setFieldValue('contra', text)} />
                <FormControl.Label style={styles.txt}>Puesto: </FormControl.Label>
                <Input variant="underlined" placeholder="Ingresa el puesto" value={values.puesto} onChangeText={text => setFieldValue('puesto', text)} />

                <Button title="Enviar" onPress={() => alert("Guardado")} style={{marginTop: 50}} />
                {/* <Button size="sm" variant="outline" style={{marginVertical: 35}}>Enviar</Button> */}
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
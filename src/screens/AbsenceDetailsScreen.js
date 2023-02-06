import { Avatar, Box, Button, CheckIcon, ScrollView, Select, Text, TextArea, View } from 'native-base'
import React, { useState } from 'react'
import { styles } from '../themes/appTheme'

export const AbsenceDetailsScreen = () => {

    const [service, setService] = useState();

    return (
        <ScrollView>
            <View style={styles.containerVertical}>
                <Box style={styles.boxNext}>
                    <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{ uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}}>
                    </Avatar>
                    <Box style={{justifyContent: 'space-evenly'}}>
                        <Text style={styles.txtNext}>Rafael Escobar</Text>
                        <Text style={styles.txtNext}>Montacargas</Text>
                    </Box>
                </Box>
                <Box style={styles.boxSectionSimple}>
                    <Text style={styles.txtNextSimple}>No. Control: 222111</Text>
                </Box>
                <Box style={styles.boxSectionSimpleLeft}>
                    <Text style={styles.txtNormalSimple}>Justificación de falta: </Text>
                </Box>
                <Box style={styles.boxNextForm}>
                    <Box style={{justifyContent: 'space-evenly'}}>
                        <Text style={styles.txtNext}>Estatus: </Text>
                    </Box>
                    <Box style={{justifyContent: 'space-evenly'}}>
                        <Select selectedValue={service} minWidth="200" placeholder="Elije el estatus" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} onValueChange={itemValue => setService(service)}>
                            <Select.Item label="Inacistencia" value="0" />
                            <Select.Item label="Falta justificada" value="2" />
                        </Select>
                    </Box>
                </Box>
                <Box style={styles.boxNextFormAreaTxt}>
                    <Box style={{justifyContent: 'space-evenly', marginVertical: 15}}>
                        <Text style={styles.txtNext}>Observaciones: </Text>
                    </Box>
                    <Box>
                        <TextArea h={'32'} placeholder="Comentarios sobre falta justificada:" w="75%" maxW="300" autoCompleteType={undefined} />
                    </Box>
                    <Button style={{backgroundColor: 'black', marginVertical: 15}}>
                        Enviar
                    </Button>
                </Box>
            </View>
        </ScrollView>
    )
}

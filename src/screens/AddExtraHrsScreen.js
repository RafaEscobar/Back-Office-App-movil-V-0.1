import { Avatar, Box, Button, Input, ScrollView, Text, View } from 'native-base'
import React from 'react'
import { styles } from '../themes/appTheme'

export const AddExtraHrsScreen = () => {
  return (
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
                <Text style={styles.txtNormalSimple}>Agregar horas extra: </Text>
            </Box>
            <Box style={{marginHorizontal: 20}}>
                <Box style={{justifyContent: 'space-evenly'}}>
                    <Text style={{...styles.txtNext, marginBottom: 15}}>Cantidad de horas extra: </Text>
                </Box>
                <Box style={{justifyContent: 'space-evenly'}}>
                    <Input variant="outline" placeholder="Horas:" />
                </Box>
            </Box>
            <Box style={styles.boxNextFormAreaTxt}>
                <Button style={{backgroundColor: 'black', marginVertical: 15}}>
                    Guardar
                </Button>
            </Box>
        </View>
    )
}

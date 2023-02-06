import { Box, Image, Text, View } from 'native-base'
import React from 'react'
import { ScrollView } from 'react-native';
import { styles } from '../themes/appTheme';

export const ProfileScreen = () => {
  return (
    <ScrollView>
        <View style={styles.containerVertical}>
            <Text style={styles.title2}>Perfil</Text>
            <Box style={ styles.boxImg }>
                <Image size={320} source={{uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}} alt="Alternate Text" borderRadius={40} />
            </Box>
            <Box style={styles.boxSection}>
                <Text style={styles.boxSectionTitle}>Nombre</Text>
            </Box>
            <Box style={styles.boxSection}>
                <Text style={styles.boxSectionTitle}>Rol</Text>
            </Box>
            <Box style={styles.boxSection}>
                <Text style={styles.boxSectionTitle}>Fecha</Text>
            </Box>
        </View>
    </ScrollView>
    )
}

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
                <Image size={320} source={{uri: "https://api.lorem.space/image/face?w=150&h=150"}} alt="Alternate Text" borderRadius={40} />
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

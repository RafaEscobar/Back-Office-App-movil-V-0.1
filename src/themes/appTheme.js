import { StyleSheet } from "react-native";

// Paleta de colores principal
export const paletaColors = {
    primary: '#66C0FD',
    secondary: '#D6FDF7',
    tertiary: '#2F2BAD'
}
// Paleta de colores secundaria 
export const paletaColorsSecond = {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(0, 0, 0, 0.30)',
    tertiary: 'rgba(255, 0, 0, 0.13)',
}

export const styles = StyleSheet.create({
    // Contenedor principal
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    // Contenedor vertical
    containerVertical: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    // Titulo principal NO centrado
    title1: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    // Titulo principal centrado
    title2: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 25,
        paddingBottom: 5,
    },
    // Caja de imagen en perfil
    boxImg: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    // Caja para secciones del perfil
    boxSection: {
        width: '100%',
        height: 65,
        backgroundColor: paletaColors.secondary,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Caja para titulo en perfil
    boxSectionTitle: {
        fontSize: 20,
        fontWeight: '800'
    },
    // Caja Access
    boxAccess: {
        flexDirection: 'row',
        backgroundColor: paletaColors.secondary,
        height: 85,
        width: "90%",
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 10, 
    },
    // Centrar cajon
    boxCenter: {
        alignItems: 'center',
        marginVertical: 15,
    },
    // Caja Access
    boxAttendance: {
        backgroundColor: paletaColors.secondary,
        height: 100,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, 
    },
    // Caja horas
    boxHoras: {
        flexDirection: 'row',
        backgroundColor: paletaColors.secondary,
        height: 60,
        width: "90%",
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 10, 
    },
    //? Agregar justificación de falta
    // Caja con imagen y textos
    boxNext: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    // Para textos dentro de caja
    txtNext: {
        fontSize: 17,
        fontWeight: '600'
    },
    // Text central 
    txtNextSimple: {
        fontSize: 18,
        fontWeight: '600'
    },
    // Caja simple para texto centralizado
    boxSectionSimple: {
        width: '100%',
        height: 65,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    // Titulo para form
    txtNormalSimple:{
        fontSize: 20,
        fontWeight: '800'
    },
    // Caja para titulo del form
    boxSectionSimpleLeft: {
        width: '100%',
        height: 65,
        justifyContent: 'center',
        left: 30,
    },
    // Caja con imagen y textos
    boxNextForm: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    // Caja con imagen y textos
    boxNextFormAreaTxt: {
        alignItems: 'center',
        marginTop: 30,
        // backgroundColor: 'yellow'
    },
    // Caja Access
    boxAccess1: {
        flexDirection: 'row',
        backgroundColor: paletaColors.secondary,
        height: 85,
        width: "100%",
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 10, 
    },
});


import { Text, View } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { AbsenceComponent } from '../../components/AbsenceComponent'

// Props
import { StackScreenProps } from '@react-navigation/stack';

// Interfaces
interface Props extends StackScreenProps<any, any>{};

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const AbsencePage = ({navigation}: Props) => {
  return (
        <View>
            <Text>Registros de ausencias</Text>
            <AbsenceComponent img_path={url_Provicional} nombre='Rafael Escobar' turno='Segundo' puesto='Gerente' estatus='Inasistencia' />
        </View>
    )
}

import { Text, View } from 'native-base'
import React from 'react'
import { AddHoursComponent } from '../../components/AddHoursComponent'
import { TouchableOpacity } from 'react-native';

// Props para navigator
import { StackScreenProps } from '@react-navigation/stack';

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

interface Props extends StackScreenProps<any, any>{};

export const RankingBonoPage = ({navigation}: Props) => {
  return (
    <View>
        <Text>Asignar horas extra</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddExtraHrsScreen')} >
          <AddHoursComponent img_path={url_Provicional} nombre='Rafael Escobar' noControl='222111' />
        </TouchableOpacity>
    </View>
  )
}

import React from 'react'
import {View, Text} from 'native-base'
import { BonosComponent } from '../../components/BonosComponent'

export const TypeBonosPage = () => {
  return (
        <View>
            <Text>Tipos de bonos</Text>
            <BonosComponent nombre='Mensual' descripcion='recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
        </View>
    )
}

import React from 'react'
import {View} from 'react-native'
import { styles } from '../../themes/appTheme'
import { StatusBar, Divider, HStack, Text } from 'native-base'
import { AttendanceComponent } from '../../components/user/AttendanceComponent'

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const AttendanceScreen = () => {
  return (
    
    <View style= {{flex: 1, backgroundColor: 'white'}}>
      <HStack bg="#ffff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
        <HStack alignItems="center">
          <Text color="black" fontSize="20" fontWeight="bold" style={{left: 15}}>
            Asistencias
          </Text>
        </HStack>
      </HStack>
      <Divider my="2" _dark={{bg: "muted.50" }} style={{bottom: 5}} />        
      <AttendanceComponent hora='10:00' fecha='01/01/2023' img_path={url_Provicional} />
    </View>
  )
}


import React from 'react'
import 'react-native-gesture-handler'
import { NativeBaseProvider, Box, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

export const App = () => {
  return (
    <NavigationContainer>

      <NativeBaseProvider>
        <Box>
          <Text>Holaaaaaaaa</Text>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

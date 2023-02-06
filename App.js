import React from 'react'
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

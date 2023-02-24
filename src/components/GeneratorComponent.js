import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import { Box, Text, Avatar } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const GeneratorComponent = ({mensaje, ruta}) => {
  const navigation = useNavigation();
  return (
        
        <TouchableOpacity onPress={ () => navigation.navigate(ruta) }  style={[styles.card, styles.elevation, {marginBottom: 35}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar bg="purple.600" alignSelf="center" size="lg" source={{ uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}}></Avatar>
              <Text style={styles.heading}>{mensaje}</Text>
              <Icon name={'chevron-forward-outline'} size={45} color={'black'} />
          </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 13,
      marginHorizontal: 20,
      top: 5
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 25,
      width: '90%',
      marginVertical: 10,
    },
    elevation: {
      elevation: 30,
      shadowColor: '#000',
    },
  });
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function Details() {
  return (
    <View style={estilo.container}>
      <TouchableOpacity style={estilo.button}>
        <Text>BATATA</Text>
      </TouchableOpacity>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
  },
});
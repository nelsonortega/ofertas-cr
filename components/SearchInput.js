import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, TextInput } from 'react-native'

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <Ionicons size={30} color='grey' name='md-search' style={styles.icon}/>
      <TextInput 
        placeholder = 'Buscar'
        style={styles.textInput}
        placeholderTextColor = 'grey'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 7
  },
  textInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
    marginLeft: 15
  },
  icon: {
    marginLeft: 5
  }
})

export default SearchInput
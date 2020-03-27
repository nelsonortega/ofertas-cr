import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const InformationScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Information Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

InformationScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{marginLeft: 15}} onPress={() => { navData.navigation.toggleDrawer() }}>
        <Ionicons name={'md-menu'} size={30} color="white" />
      </TouchableOpacity>
    )
  }
}

export default InformationScreen
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LocationScrenn = props => {
  return (
    <View style={styles.screen}>
      <Text>Location Screnn</Text>
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

LocationScrenn.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{marginLeft: 15}} onPress={() => { navData.navigation.toggleDrawer() }}>
        <Ionicons name={'md-menu'} size={30} color="white" />
      </TouchableOpacity>
    )
  }
}

export default LocationScrenn
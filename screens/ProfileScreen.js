import React from 'react'
import HeaderImage from '../components/HeaderImage'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ProfileScrenn = props => {
  return (
    <View style={styles.screen}>
      <Text>Profile Screnn</Text>
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

ProfileScrenn.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{marginLeft: 15}} onPress={() => { navData.navigation.toggleDrawer() }}>
        <Ionicons name={'md-menu'} size={30} color="white" />
      </TouchableOpacity>
    )
  }
}

export default ProfileScrenn
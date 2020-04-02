import React from 'react'
import HeaderIcon from '../components/HeaderIcon'

import { StyleSheet, Text, View } from 'react-native'

const ProfileScrenn = props => {
  return (
    <View style={styles.screen}>
      <Text>Profile Screnn</Text>
    </View>
  )
}

ProfileScrenn.navigationOptions = navData => {
  return {
    headerLeft: () => <HeaderIcon navData={navData} iconName={'md-menu'}/>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

export default ProfileScrenn
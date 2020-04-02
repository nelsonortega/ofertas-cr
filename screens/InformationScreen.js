import React from 'react'
import HeaderIcon from '../components/HeaderIcon'

import { StyleSheet, Text, View } from 'react-native'

const InformationScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Information Screen</Text>
    </View>
  )
}

InformationScreen.navigationOptions = navData => {
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

export default InformationScreen
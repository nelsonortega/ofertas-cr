import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

const HeaderIcon = props => {
  const toggleDrawer = () => {
    props.navData.navigation.toggleDrawer()
  }

  return (
    <TouchableOpacity style={styles.icon} onPress={toggleDrawer}>
      <Ionicons 
        size={30} 
        color="white" 
        name={props.iconName} 
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15
  }
})

export default HeaderIcon
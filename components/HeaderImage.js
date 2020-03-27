import React from 'react'

import { StyleSheet, Image } from 'react-native'

const HeaderImage = props => {
  return (
    <Image
      style={styles.image} 
      source={require('../assets/imgs/ofertascrlogo.png')}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 260, 
    height: 35
  }
})

export default HeaderImage
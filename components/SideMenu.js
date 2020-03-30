import React from 'react'

import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native'

const SideMenu = props => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/imgs/background.jpg')}
        style={styles.imageBackground}
      >
      </ImageBackground>
      <View>
        <DrawerNavigatorItems {...props}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: undefined, 
    padding: 120, 
    paddingTop: 48
  }
})

export default SideMenu
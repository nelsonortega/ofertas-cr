import React from 'react'
import MapView from 'react-native-maps'

import { StyleSheet } from 'react-native'

const CustomMap = props => {
  return <MapView style={styles.mapView}/>
}

const styles = StyleSheet.create({
  mapView: {
    width: '100%', 
    height: 200, 
    marginVertical: 10
  }
})

export default CustomMap
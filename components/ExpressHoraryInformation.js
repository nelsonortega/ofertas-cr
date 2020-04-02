import React from 'react'
import CustomText from '../components/CustomText'

import { StyleSheet, View } from 'react-native'

const ExpressHoraryInformation = props => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText bold style={styles.title}>Express</CustomText>
        <CustomText style={styles.description}>Yes</CustomText>
      </View>
      <View>
        <CustomText bold style={styles.title}>Horary</CustomText>
        <CustomText style={styles.description}>8am - 5pm</CustomText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginLeft: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center'
  }
})

export default ExpressHoraryInformation
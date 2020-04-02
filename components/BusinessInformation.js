import React from 'react'
import CustomText from '../components/CustomText'

import { DUMMYPOSTS } from '../data/dummy-data'
import { StyleSheet, View, Image } from 'react-native'
import ExpressHoraryInformation from './ExpressHoraryInformation'

const BusinessInformation = props => {
  return (
    <View style={styles.container}>
      <CustomText bold style={styles.title}>Bussines Name</CustomText>
      <View style={styles.bussinesContainer}>
        <Image
          source={{uri: DUMMYPOSTS[0].image}}
          style={styles.bussinesImage}
        />
        <View style={{width: '60%'}}>
          <CustomText numberOfLines={3}>Bussines Description Lorem ipsum elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit</CustomText>
        </View>
      </View>

      <View style={styles.separatorLine} />
      <ExpressHoraryInformation />
      <View style={styles.separatorLine} />

      <CustomText bold style={styles.title}>Direction</CustomText>
      <CustomText style={styles.description}>Bussines Description Lorem ipsum elit, sed do eiusmod tempor</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 15
  },
  description: {
    fontSize: 15,
    marginHorizontal: 15
  },
  separatorLine: {
    opacity: 0.5,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  bussinesContainer: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  bussinesImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 15
  }
})

export default BusinessInformation
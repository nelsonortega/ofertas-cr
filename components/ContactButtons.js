import React from 'react'
import CustomText from '../components/CustomText'

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const ContactButtons = props => {

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Ionicons size={30} name='md-phone-portrait' style={styles.buttonIcon} />
          <CustomText bold style={styles.contactDescription}>Llamar</CustomText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Ionicons size={30} name='md-mail' style={styles.buttonIcon} />
          <CustomText bold style={styles.contactDescription} >Email</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '60%',
    marginLeft: '20%',
    marginVertical: 15, 
    textAlign: 'center',
    flexDirection: "row", 
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row'
  },
  buttonIcon: {
    color: 'black',
    marginRight: 10
  },
  contactDescription: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15
  }
})

export default ContactButtons
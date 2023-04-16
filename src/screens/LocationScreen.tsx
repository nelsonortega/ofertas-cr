import { ReactElement } from 'react'
import { Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const LocationScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Location screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LocationScreen

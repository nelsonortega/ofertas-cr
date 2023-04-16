import { ReactElement } from 'react'
import { Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const InformationScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Information screen</Text>
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

export default InformationScreen

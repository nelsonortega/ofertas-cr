import { ReactElement } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SettingsScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
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

export default SettingsScreen

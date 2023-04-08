import { ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, Text } from 'react-native'

const HomeScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen

import { ReactElement } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HomeScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
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

export default HomeScreen

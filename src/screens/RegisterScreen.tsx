import { ReactElement } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const RegisterScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Register screen</Text>
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

export default RegisterScreen

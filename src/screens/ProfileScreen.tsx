import { ReactElement } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const ProfileScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
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

export default ProfileScreen

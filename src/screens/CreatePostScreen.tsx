import { ReactElement } from 'react'
import { Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const CreatePostScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Create post screen</Text>
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

export default CreatePostScreen

import React from 'react'
import HeaderImage from '../components/HeaderImage'

import { StyleSheet, Text, View } from 'react-native'

const PostDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Post Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

PostDetailScreen.navigationOptions = {
  headerTitle: () => <HeaderImage />,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'grey' : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'grey'
}

export default PostDetailScreen
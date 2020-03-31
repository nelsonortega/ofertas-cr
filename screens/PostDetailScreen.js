import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const PostDetailScreen = props => {
  const postId = props.navigation.getParam('postId')

  return (
    <View style={styles.screen}>
      <Text>Post Detail {postId}</Text>
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

export default PostDetailScreen
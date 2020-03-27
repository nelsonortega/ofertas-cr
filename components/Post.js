import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Post = props => {
  return (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => {
        props.navigation.navigate({
          routeName: 'PostDetail',
          params: { postId: props.postItem.item.id }
        });
      }}
    >
      <View>
        <Text>{props.postItem.item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: 'lightblue'
  }
})

export default Post
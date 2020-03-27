import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Post = props => {
  const openPostDetail = () => {
    props.navigation.navigate({
      routeName: 'PostDetail',
      params: { postId: props.postItem.item.id }
    })
  }

  return (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={openPostDetail}
    >
      <Image 
        style={styles.imageStyle}
        source={require('../assets/imgs/food.jpeg')}
      />
      <View>
        <Text style={styles.title}>{props.postItem.item.title}</Text>
        <Text style={styles.description}>{props.postItem.item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 15,
    height: 300,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  imageStyle: {
    margin: 10,
    borderRadius: 20,
    width: 360,
    height: 150
  },
  title: {
    marginLeft: 15,
    fontSize: 20
  },
  description: {
    marginLeft: 15,
    fontSize: 13
  }
})

export default Post
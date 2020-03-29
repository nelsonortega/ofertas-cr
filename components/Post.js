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
    <TouchableOpacity onPress={openPostDetail} >
      <View style={styles.postContainer}>
        <Image 
          style={styles.imageStyle}
          source={{
            uri: props.postItem.item.image,
          }}
        />
        <View>
          <Text style={styles.title}>{props.postItem.item.title}</Text>
          <Text style={styles.description}>{props.postItem.item.description}</Text>
        </View>
        <View>
          <Text style={styles.price}>{props.postItem.item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 25,
    height: 320,
    elevation: 20,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  imageStyle: {
    marginBottom: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    height: '60%'
  },
  title: {
    marginHorizontal: 15,
    fontSize: 20
  },
  description: {
    marginHorizontal: 15,
    fontSize: 13,
    color: 'grey'
  },
  price: {
    marginRight: 30,
    marginTop: 15,
    fontSize: 13,
    textAlign: 'right'
  }
})

export default Post
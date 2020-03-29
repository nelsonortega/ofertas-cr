import React from 'react'

import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native'

const Post = props => {
  const openPostDetail = () => {
    props.navigation.navigate({
      routeName: 'PostDetail',
      params: { postId: props.postItem.item.id }
    })
  }

  return (
    <TouchableNativeFeedback onPress={openPostDetail} >
      <View style={styles.postContainer}>
        <Image 
          style={styles.imageStyle}
          source={{uri: props.postItem.item.image}}
        />
        <View style={styles.lineSeparator} />
        <View>
          <Text style={styles.title}>{props.postItem.item.title}</Text>
          <Text style={styles.description}>{props.postItem.item.description}</Text>
        </View>
        <View>
          <Text style={styles.price}>₡{props.postItem.item.price}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
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
  lineSeparator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    opacity: 0.5
  },
  imageStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    height: '60%'
  },
  title: {
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    marginHorizontal: 15,
    fontSize: 14,
    color: 'grey'
  },
  price: {
    marginRight: 30,
    marginTop: 15,
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'bold'
  }
})

export default Post
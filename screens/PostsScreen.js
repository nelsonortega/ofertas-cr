import React from 'react'
import HeaderImage from '../components/HeaderImage'

import { DUMMYPOSTS } from '../data/dummy-data'
import { StyleSheet, FlatList, View, Platform } from 'react-native'
import Post from '../components/Post'

const PostsScreen = props => {
  const renderGridItem = postItem => {
    return <Post postItem={postItem} navigation={props.navigation} />
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={DUMMYPOSTS}
      renderItem={renderGridItem}
    />
  )
}

const styles = StyleSheet.create({})

PostsScreen.navigationOptions = {
  headerTitle: () => <HeaderImage />,
  headerRight: () => <View></View>,
  headerLeft: () => <View></View>,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'grey' : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'grey'
}

export default PostsScreen
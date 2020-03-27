import React from 'react'
import Post from '../components/Post'

import { Ionicons } from '@expo/vector-icons'
import { DUMMYPOSTS } from '../data/dummy-data'
import { FlatList, TouchableOpacity } from 'react-native'

const PostsScreen = props => {
  const renderGridItem = postItem => {
    return <Post postItem={postItem} navigation={props.navigation} />
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={DUMMYPOSTS}
      renderItem={renderGridItem}
    />
  )
}

PostsScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{marginLeft: 15}} onPress={() => { navData.navigation.toggleDrawer() }}>
        <Ionicons name={'md-menu'} size={30} color="white" />
      </TouchableOpacity>
    )
  }
}

export default PostsScreen
import React from 'react'
import Post from '../components/Post'
import HeaderIcon from '../components/HeaderIcon'

import { FlatList } from 'react-native'
import { DUMMYPOSTS } from '../data/dummy-data'

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
    headerLeft: () => <HeaderIcon navData={navData} iconName={'md-menu'}/>
  }
}

export default PostsScreen
import React from 'react'
import Post from '../components/Post'
import HeaderIcon from '../components/HeaderIcon'
import SearchInput from '../components/SearchInput'
import HorizontalCategories from '../components/HorizontalCategories'

import { DUMMYPOSTS } from '../data/dummy-data'
import { FlatList, StyleSheet } from 'react-native'

const PostsScreen = props => {
  const renderGridItem = postItem => {
    return <Post postItem={postItem} navigation={props.navigation} />
  }

  return (
    <FlatList
      ListHeaderComponent={<>
        <SearchInput />
        <HorizontalCategories /></>
      }
      keyExtractor={item => item.id}
      data={DUMMYPOSTS}
      renderItem={renderGridItem}
      style={styles.screen}
    />
  )
}

PostsScreen.navigationOptions = navData => {
  return {
    headerLeft: () => <HeaderIcon navData={navData} iconName={'md-menu'}/>
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    marginBottom: 20
  }
})

export default PostsScreen
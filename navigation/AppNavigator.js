import PostsScreen from '../screens/PostsScreen'
import PostDetailScreen from '../screens/PostDetailScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  Posts: PostsScreen,
  PostDetail: PostDetailScreen
})

export default createAppContainer(AppNavigator)
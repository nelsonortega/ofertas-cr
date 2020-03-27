import React from 'react'
import PostsScreen from '../screens/PostsScreen'
import HeaderImage from '../components/HeaderImage'
import ProfileScrenn from '../screens/ProfileScreen'
import LocationScrenn from '../screens/LocationScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import PostDetailScreen from '../screens/PostDetailScreen'
import InformationScreen from '../screens/InformationScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

const navigationOptions = {
  headerTitle: () => <HeaderImage />,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'grey'
  }
}

const PostsNavigator = createStackNavigator({
  Posts: PostsScreen,
  PostDetail: PostDetailScreen
}, { defaultNavigationOptions: navigationOptions })

const CreatePostNavigator = createStackNavigator({
  CreatePost: CreatePostScreen
}, { defaultNavigationOptions: navigationOptions })

const LocationNavigator = createStackNavigator({
  Location: LocationScrenn
}, { defaultNavigationOptions: navigationOptions })

const InformationNavigator = createStackNavigator({
  Information: InformationScreen
}, { defaultNavigationOptions: navigationOptions })

const ProfileNavigator = createStackNavigator({
  Profile: ProfileScrenn
}, { defaultNavigationOptions: navigationOptions })

const MainSideNavigator = createDrawerNavigator({
  Inicio: PostsNavigator,
  Publicar: CreatePostNavigator,
  Ubicación: LocationNavigator,
  Información: InformationNavigator, 
  Perfil: ProfileNavigator
})

export default createAppContainer(MainSideNavigator)
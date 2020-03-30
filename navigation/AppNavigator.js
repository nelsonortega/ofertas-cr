import React from 'react'
import SideMenu from '../components/SideMenu'
import PostsScreen from '../screens/PostsScreen'
import HeaderImage from '../components/HeaderImage'
import ProfileScrenn from '../screens/ProfileScreen'
import LocationScrenn from '../screens/LocationScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import PostDetailScreen from '../screens/PostDetailScreen'
import InformationScreen from '../screens/InformationScreen'

import { Ionicons } from '@expo/vector-icons'
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

const sideMenuElementStyle = {
  activeBackgroundColor: '#c0c0c0',
  activeTintColor: 'white',
  itemsContainerStyle: {
    marginTop: 16,
    marginHorizontal: 8
  },
  labelStyle: {
    fontWeight: 'normal',
    fontFamily: 'open-sans-bold'
  },
  itemStyle: {
    borderRadius: 7
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
  Home: {
    screen: PostsNavigator,
    navigationOptions: {
      title: 'Inicio',
      drawerIcon: ({tintColor}) => <Ionicons size={20} color={tintColor} name='md-home' />
    }
  },
  CreatePost: {
    screen: CreatePostNavigator,
    navigationOptions: {
      title: 'Publicar',
      drawerIcon: ({tintColor}) => <Ionicons size={20} color={tintColor} name='ios-create' />
    }
  },
  Location: {
    screen: LocationNavigator,
    navigationOptions: {
      title: 'Ubicación',
      drawerIcon: ({tintColor}) => <Ionicons size={20} color={tintColor} name='md-locate' />
    }
  },
  Information: {
    screen: InformationNavigator,
    navigationOptions: {
      title: 'Información',
      drawerIcon: ({tintColor}) => <Ionicons size={20} color={tintColor} name='md-information-circle-outline' />
    }
  }, 
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      title: 'Perfil',
      drawerIcon: ({tintColor}) => <Ionicons size={20} color={tintColor} name='md-man' />
    }
  }
}, {
  contentComponent: props => <SideMenu {...props} />,
  contentOptions: sideMenuElementStyle
})

export default createAppContainer(MainSideNavigator)
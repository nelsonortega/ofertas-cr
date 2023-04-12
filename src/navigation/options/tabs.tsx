import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'

const ICON_SIZE = 23

export const HOME_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={color}
      size={ICON_SIZE}
      name={focused ? 'home' : 'home-outline'}
    />
  )
}

export const LOCATION_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={color}
      size={ICON_SIZE}
      name={focused ? 'map-marker-account' : 'map-marker-account-outline'}
    />
  )
}

export const CREATE_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={color}
      size={ICON_SIZE}
      name={focused ? 'tag-plus' : 'tag-plus-outline'}
    />
  )
}

export const INFO_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={color}
      size={ICON_SIZE}
      name={focused ? 'information' : 'information-outline'}
    />
  )
}

export const PROFILE_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={color}
      size={ICON_SIZE}
      name={focused ? 'account' : 'account-outline'}
    />
  )
}

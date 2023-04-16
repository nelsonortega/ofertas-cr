import { COLORS } from '../../utils'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'

const ICON_SIZE = 23

export const HOME_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  title: 'Inicio',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={focused ? COLORS.GRAY : color}
      size={ICON_SIZE}
      name={focused ? 'home' : 'home-outline'}
    />
  )
}

export const LOCATION_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  title: 'Ubicacion',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={focused ? COLORS.GRAY : color}
      size={ICON_SIZE}
      name={focused ? 'map-marker-account' : 'map-marker-account-outline'}
    />
  )
}

export const CREATE_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  title: 'Publicar',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={focused ? COLORS.GRAY : color}
      size={ICON_SIZE}
      name={focused ? 'tag-plus' : 'tag-plus-outline'}
    />
  )
}

export const INFO_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  title: 'Info',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={focused ? COLORS.GRAY : color}
      size={ICON_SIZE}
      name={focused ? 'information' : 'information-outline'}
    />
  )
}

export const PROFILE_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  title: 'Perfil',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons
      color={focused ? COLORS.GRAY : color}
      size={ICON_SIZE}
      name={focused ? 'account' : 'account-outline'}
    />
  )
}
